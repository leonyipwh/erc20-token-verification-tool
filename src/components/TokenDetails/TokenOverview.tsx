import { useEffect, useState, useContext } from 'react';
import TokenContext from '../../context/tokenFormContext';
import Loader from '../Loader';
import { getAbi } from '../../api/etherscan';
import { fetchProfile } from '../../helpers/token/tokenProfileHelper';
import Profile from '../TokenProfile';
import GasEstimation from '../GasEstimation';
import Grid from '@mui/material/Grid';

interface ITokenProfile {
  label: string;
  value: number | string | undefined;
}

const TokenOverview = () => {
  const [hasError, setHasError] = useState<string | null>();
  const [tokenProfile, setTokenProfile] = useState<ITokenProfile[]>([]);
  const { submitForm } = useContext(TokenContext);

  useEffect(() => {
    setHasError(null);
    setTokenProfile([]);
    getTokenProfile();
  }, [submitForm]);

  const getTokenProfile = async () => {
    const { network, address, provider } = submitForm;
    if (!provider) return;
    try {
      const { result } = await getAbi(network, address);
      const profileData = await fetchProfile(address, result, provider);

      setTokenProfile(profileData);
    } catch (err) {
      console.error(err);
      const { result } = err;
      setHasError(result);
    }
  };

  return (
    <>
      {hasError && <>{hasError}</>}
      {!hasError && !tokenProfile.length ? (
        <Loader />
      ) : (
        !hasError && (
          <Grid
            container
            direction="column"
            spacing={3}
          >
            <Grid item>
              <Profile data={tokenProfile} />
            </Grid>
            <Grid item>
              <GasEstimation />
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};

export default TokenOverview;
