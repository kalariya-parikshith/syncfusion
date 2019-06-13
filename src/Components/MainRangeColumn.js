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
import RangeColumn from './RangeColumn';

const useStyles = makeStyles({
	card: {
		minWidth: 245,
		display: 'inline-block',
		width: '100%',
		borderRadius: '0',
		display: 'flex',
		flexDirection: 'column',
		height: 520
	},
	title: {
		fontSize: 14
	},
	showInline: {
		display: 'flex',
		flexDirection: 'row'
	},
	numberBox: {
		padding: '10px 15px 10px 15px',
		borderRadius: 3
	}
});

export default function MainRangeColumn(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<RangeColumn />
			<div className={classes.showInline}>
				<div
					style={{
						flexGrow: '1',
						textAlign: 'center',
						fontWeight: 550,
						fontSize: 16,
						color: 'rgb(0,0,0,0.7)'
					}}
				>
					ACTIVITY TIME (DAYS)
				</div>
				<div
					style={{
						flexGrow: '11',
						display: 'flex',
						flexDirection: 'row',
						color: 'white',
						fontWeight: '500',
						fontSize: 18
					}}
				>
					<div
						style={{
							flexGrow: '20',
							backgroundColor: 'white',
							display: 'flex',
							flexDirection: 'row'
						}}
					>
						<div style={{ flexGrow: '2', textAlign: 'center' }}>
							<span
								className={classes.numberBox}
								style={{ backgroundColor: '#B0BEC5' }}
							>
								8
							</span>
						</div>
						<div style={{ flexGrow: '2', textAlign: 'center' }}>
							<span
								className={classes.numberBox}
								style={{ backgroundColor: '#78909C' }}
							>
								4
							</span>
						</div>
						<div style={{ flexGrow: '2', textAlign: 'center' }}>
							<span
								className={classes.numberBox}
								style={{ backgroundColor: '#546E7A' }}
							>
								3
							</span>
						</div>
						<div style={{ flexGrow: '2', textAlign: 'center' }}>
							<span
								className={classes.numberBox}
								style={{ backgroundColor: '#37474F' }}
							>
								6
							</span>
						</div>
						<div style={{ flexGrow: '2', textAlign: 'center' }}>
							<span
								className={classes.numberBox}
								style={{ backgroundColor: 'rgb(0,0,255,0.5)' }}
							>
								21
							</span>
						</div>
					</div>
					<div style={{ flexGrow: '12' }} />
				</div>
			</div>
		</Card>
	);
}
