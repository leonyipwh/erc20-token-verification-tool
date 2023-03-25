import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import { PROPERTY_STATUS } from '@netilon/differify';

const ResultRow = ({ data }: { data: any }) => {
  const [open, setOpen] = React.useState(false);
  const { inputs, name, outputs, type } = data._;

  const checkDiff = (diff: any, label: string) => {
    if (diff.changes === 0) return <></>;

    return diff._.map((item: any, index: number) => {
      // missing method
      if (item.status === PROPERTY_STATUS.DELETED) {
        return (
          <DiffExplain
            key={index}
            text={`Missing ${label} type ${item.original.type}`}
          />
        );
      }
      // unmatched type
      if (item._.type.status === PROPERTY_STATUS.MODIFIED) {
        return (
          <DiffExplain
            key={index}
            text={`Expect ${label} type ${item._.type.original}, but found ${item._.type.current}`}
          />
        );
      }
    });
  };

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell>{type.original}</TableCell>
        <TableCell>{name.original}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={4}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
          >
            {type.status !== PROPERTY_STATUS.DELETED ? (
              <>
                {outputs && checkDiff(outputs, 'outputs')}
                {inputs && checkDiff(inputs, 'inputs')}
              </>
            ) : (
              <DiffExplain text={`Missing entire ${type.original}`} />
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const DiffExplain = ({ text }: { text: string }) => {
  return (
    <Typography
      sx={{ py: 2, px: 4 }}
      variant="subtitle2"
      gutterBottom
      component="div"
    >
      {text}
    </Typography>
  );
};

export default ResultRow;
