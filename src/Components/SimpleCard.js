import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoughNut from './DoughNut';
import { borderRadius } from '@material-ui/system';
import Bar from '../Bar';

const useStyles = makeStyles({
  card: {
    minWidth: 245,
    // marginLeft: '19.5%',
    // marginRight: '8%',
    // height: '40%',
    display: 'inline-block',
    width: '50%',
    borderRadius: '0'
  },
  title: {
    fontSize: 14
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Word of the Day
        </Typography> */}
        {/* <DoughNut /> */}
        {props.children}
      </CardContent>
    </Card>
  );
}
