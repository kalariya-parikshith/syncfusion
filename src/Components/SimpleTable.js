import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AtAndT from '../static/atandt.png';
import zemoso from '../static/zemoso_logo.png';
import amazon from '../static/amazon.png';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '100%',
    marginTop: '2%',
    overflowX: 'auto',
    borderRadius: '0'
  },
  table: {
    width: '100%'
  },
  card: {
    width: '100%',
    // marginLeft: '19.5%',
    // marginRight: '8%',
    // height: '40%',
    display: 'inline-block',
    borderRadius: '0'
  },
  icon: {
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '2px 2px 2px 2px #E5F1F6',
    padding: '2px'
  },
  tableHead: {
    backgroundColor: '#D9E1E5'
  },
  tableRow: {
    borderRight: '1px solid white'
  }
}));

function createData(
  rank,
  vendorName,
  vendorScore,
  active,
  placements,
  terminations,
  violations
) {
  return {
    rank,
    vendorName,
    vendorScore,
    active,
    placements,
    terminations,
    violations
  };
}

const rows = [
  createData(1, 'AT&T', 78.2, 123, 78, 87, 23),
  createData(2, 'zemoso', 53.2, 123, 231, 34, 24),
  createData(3, 'amazon', 45, 32, 129, 234, 12),
  createData(4, 'AT&T', 33, 23, 232, 12, 43),
  createData(5, 'AT&T', 12, 76, 87, 25, 98)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableHead}>
                <TableCell className={classes.tableRow}>Rank</TableCell>
                <TableCell className={classes.tableRow}>Vendor Name</TableCell>
                <TableCell align='left' className={classes.tableRow}>
                  Vendor Score
                </TableCell>
                <TableCell align='left' className={classes.tableRow}>
                  Active
                </TableCell>
                <TableCell align='left' className={classes.tableRow}>
                  Placements
                </TableCell>
                <TableCell align='left' className={classes.tableRow}>
                  Terminations
                </TableCell>
                <TableCell align='left'>Violations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.rank}>
                  <TableCell component='th' scope='row'>
                    {row.rank}
                  </TableCell>
                  <TableCell align='left'>
                    {row.vendorName === 'AT&T' ? (
                      <img src={AtAndT} className={classes.icon} />
                    ) : row.vendorName === 'zemoso' ? (
                      <img src={zemoso} className={classes.icon} />
                    ) : row.vendorName === 'amazon' ? (
                      <img src={amazon} className={classes.icon} />
                    ) : (
                      <img src={AtAndT} className={classes.icon} />
                    )}

                    {row.vendorName}
                  </TableCell>
                  <TableCell align='left'>{row.vendorScore}%</TableCell>
                  <TableCell align='left'>{row.active}</TableCell>
                  <TableCell align='left'>{row.placements}</TableCell>
                  <TableCell align='left'>{row.terminations}</TableCell>
                  <TableCell align='left'>{row.violations}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CardContent>
    </Card>
  );
}
