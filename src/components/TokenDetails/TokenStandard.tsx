import { useEffect, useState, useContext } from 'react';
import { getAbi } from '../../api/etherscan';
import Loader from '../Loader';
import { compatibilityCheck } from '../../helpers/abi/abiHelper';
import CompatibilityResult from '../CompatibilityResult';
import TokenContext from '../../context/tokenFormContext';
import SnackbarContext from '../../context/snackbarContext';
import { multiPropDiff } from '@netilon/differify';

const TokenStandard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [abiScanOutput, setAbiScanOutput] = useState<multiPropDiff[]>([]);
  const { submitForm } = useContext(TokenContext);
  const { snackbarState, setSnackbarState } = useContext(SnackbarContext);

  useEffect(() => {
    setLoading(true);
    fetchTokenDetails();
  }, [submitForm]);

  const fetchTokenDetails = async () => {
    const { network, address } = submitForm;
    try {
      const { status, message, result } = await getAbi(network, address);

      if (status !== '1') throw new Error(message);

      setAbiScanOutput(compatibilityCheck(result));
    } catch (err) {
      console.error(err);
      setSnackbarState({
        ...snackbarState,
        open: true,
        text: 'Unable to get ABI'
      });
    } finally {
      setLoading(false);
    }
  };

  return <>{loading ? <Loader /> : <CompatibilityResult data={abiScanOutput} />}</>;
};

export default TokenStandard;
