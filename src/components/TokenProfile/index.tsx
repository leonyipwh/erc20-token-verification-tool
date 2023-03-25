import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

interface IProfileData {
  label: string;
  value: number | string | undefined;
}

const TokenProfile = ({ data }: { data: IProfileData[] }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        variant="h6"
        gutterBottom
      >
        Token Profile
      </Typography>
      <Divider />
      {data.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              mt: 2
            }}
          >
            <Typography
              variant="subtitle2"
              gutterBottom
              component="span"
            >
              {item.label}:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="span"
              sx={{ ml: 1 }}
            >
              {item?.value}
            </Typography>
          </Box>
        );
      })}
    </Paper>
  );
};

export default TokenProfile;
