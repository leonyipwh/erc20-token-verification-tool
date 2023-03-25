import { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Typography from '@mui/material/Typography';
import TokenContext from '../../context/tokenFormContext';
import Paper from '@mui/material/Paper';
import SnackbarContext from '../../context/snackbarContext';
import Divider from '@mui/material/Divider';
import { getTokenLogs, getTxReceipt } from '../../helpers/tx/txHelper';
import Loader from '../Loader';
import GasUsage from './GasUsage';

const GasEstimation = () => {
  const { submitForm } = useContext(TokenContext);
  const { address, provider } = submitForm;
  const [gasUsage, setGasUsage] = useState<number[] | null>(null);
  const { snackbarState, setSnackbarState } = useContext(SnackbarContext);

  const getStat = async () => {
    if (!provider) return;

    try {
      const tokenLogs = await getTokenLogs(provider, address);

      if (!tokenLogs.length) {
        setGasUsage([]);
        return;
      }

      const txReceipt = await getTxReceipt(provider, tokenLogs);

      const gasUsage = txReceipt.map((rpt) => {
        return Number(ethers.utils.formatUnits(rpt.gasUsed, 'wei'));
      });

      setGasUsage(gasUsage);
    } catch (err) {
      setGasUsage([]);
      const errMsg = err.error?.message;
      console.error(errMsg);
      setSnackbarState({ ...snackbarState, open: true, text: errMsg || 'Something went wrong' });
    }
  };

  useEffect(() => {
    getStat();
  }, [submitForm]);

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
        >
          Gas Estimation
        </Typography>
        <Divider
          sx={{
            mb: 2
          }}
        />
        {!gasUsage ? <Loader /> : <GasUsage gasUsage={gasUsage} />}
      </Paper>
    </>
  );
};

export default GasEstimation;
