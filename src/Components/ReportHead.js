import React, { Component } from 'react';
import { makeStyles, Tabs } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import DropDown from './DropDown';
import FilterIcon from '../static/filter.png';
import TabComponent from './Tabs';

const useStyles = makeStyles({
	reportHead: {
		width: '100%',
		height: '117px',
		marginBottom: '20px',
		overflow: 'visible'
	},
	vendorReport: {
		fontWeight: 800,
		color: 'rgb(0,0,0,0.7)',
		fontSize: 17,
		marginLeft: '40px'
	},
	verticallyCenter: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		textAlign: 'center'
	},
	filterImage: {
		width: '12px',
		height: '12px',
		marginTop: '10px'
	}
});

export default function ReportHead(props) {
	const classes = useStyles();

	return (
		<Card className={classes.reportHead}>
			<CardContent>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						verticalAlign: 'middle'
					}}
				>
					<div
						className={`${classes.vendorReport} ${classes.verticallyCenter}`}
					>
						Vendor Report
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div
							style={{
								marginRight: '20px'
							}}
							className={classes.verticallyCenter}
						>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<div className={classes.verticallyCenter}>
									<img
										src={FilterIcon}
										className={classes.filterImage}
										alt='filter'
									/>
								</div>
								<span
									style={{
										marginLeft: '10px',
										color: 'rgb(0,0,255,0.8)',
										marginRight: '10px',
										marginTop: '10px'
									}}
								>
									Filter
								</span>
							</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div
								style={{
									fontWeight: '600',
									fontSize: '13px',
									color: 'rgb(0,0,0,0.7)'
								}}
							>
								Select Quarter
							</div>
							<DropDown />
						</div>
					</div>
				</div>
				<TabComponent />
			</CardContent>
		</Card>
	);
}
