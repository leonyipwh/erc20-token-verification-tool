import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CountUp from 'react-countup';
import { mean, std, round } from 'mathjs';
import { SparklinesLine, Sparklines } from 'react-sparklines';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface IStat {
  label: string;
  value: number;
}

const GasUsage = ({ gasUsage }: { gasUsage: number[] }) => {
  const theme = useTheme();
  const [data, setData] = useState<IStat[]>([]);

  useEffect(() => {
    if (!gasUsage.length) return;
    setData([
      {
        label: 'Average Gas Usage',
        value: round(mean(gasUsage))
      },
      {
        label: 'Gas Usage Deviation',
        value: round(std(gasUsage))
      }
    ]);
  }, []);

  return (
    <>
      {!gasUsage.length ? (
        <>No transaction record available</>
      ) : (
        <>
          <Box>
            <Sparklines
              data={gasUsage}
              height={25}
              margin={5}
            >
              <SparklinesLine
                style={{
                  stroke: theme.palette.primary.light,
                  fill: 'none',
                  strokeWidth: 0.6
                }}
              />
            </Sparklines>
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-around"
            divider={
              <Divider
                orientation="vertical"
                flexItem
              />
            }
          >
            {data.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    component="span"
                    color="primary.main"
                  >
                    {item.label}
                  </Typography>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      component="span"
                    >
                      <CountUp
                        end={item.value}
                        duration={0.5}
                      />
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </>
      )}
    </>
  );
};

export default GasUsage;
