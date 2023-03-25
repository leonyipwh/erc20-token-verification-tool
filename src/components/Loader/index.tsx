import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => (
  <Box
    component="span"
    sx={{ display: 'flex', justifyContent: 'center' }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;
