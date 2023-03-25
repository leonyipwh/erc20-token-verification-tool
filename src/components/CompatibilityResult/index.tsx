import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Toolbar from '@mui/material/Toolbar';
import { multiPropDiff } from '@netilon/differify';
import ResultRow from './ResultRow';

const CompatibilityResult = ({ data }: { data: multiPropDiff[] }) => {
  return (
    <>
      {!data.length ? (
        <Alert severity="success">
          <AlertTitle>Compatible</AlertTitle>
          Contract is compatible with ERC-20 token standard
        </Alert>
      ) : (
        <>
          <Alert severity="warning">
            <AlertTitle>Incompatible</AlertTitle>Contract is incompatible with ERC-20 token standard
          </Alert>
          <TableContainer
            component={Paper}
            sx={{ mt: 3 }}
          >
            <Toolbar>
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Incompatibility
              </Typography>
            </Toolbar>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="incompatibility table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <ResultRow
                    data={row}
                    key={index}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default CompatibilityResult;
