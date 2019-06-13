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
	table: {
		width: '100%'
	},
	card: {
		width: '100%',
		display: 'inline-block',
		borderRadius: '0'
	},
	tableHead: {
		backgroundColor: '#ECEFF1'
	},
	tableRow: {
		borderRight: '1px solid white'
	}
}));

function createData(color, stage, candidates) {
	return {
		color,
		stage,
		candidates
	};
}

const rows = [
	createData('#B0BEC5', 'Vendor Submit', 86),
	createData('#78909C', 'MSP approved', 30),
	createData('#546E7A', 'Interviews', 8),
	createData('#37474F', 'Offers', 3)
];

export default function SimpleTable() {
	const classes = useStyles();

	return (
		<Table className={classes.table}>
			<TableHead>
				<TableRow className={classes.tableHead}>
					<TableCell
						className={classes.tableRow}
						style={{ background: 'white', border: 0 }}
					/>
					<TableCell className={classes.tableRow}>Stage</TableCell>
					<TableCell align='left' className={classes.tableRow}>
						#candidates
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow key={row.color}>
						<TableCell
							align='right'
							width='0'
							component='th'
							scope='row'
							padding='none'
							style={{ border: 0 }}
						>
							<div
								style={{
									width: '10px',
									height: '10px',
									backgroundColor: row.color,
									color: row.color,
									borderRadius: '2px',
									padding: 0,
									margin: 0
								}}
							/>
						</TableCell>
						<TableCell align='left'>{row.stage}</TableCell>
						<TableCell align='left'>{row.candidates}</TableCell>
						<TableCell align='left' style={{ border: 0, width: 100 }} />
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
