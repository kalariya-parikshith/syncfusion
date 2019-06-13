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
import FunnelTable from './FunnelTable';

const useStyles = makeStyles({
	card: {
		minWidth: 245,
		// height: 200,
		display: 'inline-block',
		width: '80%',
		borderRadius: '0',
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 20
	},
	title: {
		fontSize: 14
	},
	totalPlacements: {
		marginLeft: '7%',
		marginRight: '38%',
		backgroundColor: '#263238',
		color: 'white',
		fontWeight: 300,
		padding: 10
	},
	roundBorderTop: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		paddingBottom: 0
	},
	roundBorderBottom: {
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		fontWeight: 1200,
		fontSize: 20
	}
});

export default function MainFunnel(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<CardContent style={{ flexGrow: '3', padding: 0 }}>
					{props.children}
				</CardContent>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						textAlign: 'left',
						flexGrow: '1'
					}}
				>
					<FunnelTable />
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
					width: '45%',
					marginBottom: 20
				}}
			>
				<span
					className={[classes.totalPlacements, classes.roundBorderTop].join(
						' '
					)}
				>
					Total Placements
				</span>
				<span
					className={[classes.totalPlacements, classes.roundBorderBottom].join(
						' '
					)}
				>
					2
				</span>
			</div>
		</Card>
	);
}
