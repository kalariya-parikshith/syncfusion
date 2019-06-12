import './index.css';
/**
 * Sample for Bar series
 */
import * as React from 'react';

import { SampleBase } from './sample-base';
import Funnel from './Funnel';
import Bar from './Bar';
import SideDrawer from './Components/SideDrawer';
import SimpleCard from './Components/SimpleCard';
import SimpleTable from './Components/SimpleTable';
import DoughNut from './Components/DoughNut';
import ReportHead from './Components/ReportHead';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Bar2 from './BarCustom';
export let data1 = [
	{ x: 'VP Approval', y: 7 },
	{ x: 'Vendor Submit ', y: 3 },
	{ x: 'Interview', y: 5 },
	{ x: 'Offer', y: 1 }
];

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: '#292C60'
		}
	}
});

/**
 * Bar sample
 */
export default class App extends SampleBase {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div>
					<SideDrawer />
					<main style={{ marginLeft: '26.1%', marginRight: '8%' }}>
						<ReportHead />
						<SimpleCard>
							<Bar />
						</SimpleCard>
						<SimpleCard>
							<Bar2 />
						</SimpleCard>
						<SimpleTable />
					</main>
				</div>
			</MuiThemeProvider>
		);
	}
}
