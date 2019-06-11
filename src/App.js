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

export let data1 = [
	{ x: 'VP Approval', y: 7 },
	{ x: 'Vendor Submit ', y: 3 },
	{ x: 'Interview', y: 5 },
	{ x: 'Offer', y: 1 }
];

/**
 * Bar sample
 */
export default class App extends SampleBase {
	render() {
		return (
			<div>
				<SideDrawer />
				<main
					style={{ marginLeft: '26.1%', marginTop: '10%', marginRight: '8%' }}
				>
					<SimpleCard>
						<DoughNut />
					</SimpleCard>
					<SimpleCard>
						<Bar />
					</SimpleCard>
					<SimpleTable />
					{/* <Bar />
          <Funnel /> */}
				</main>
			</div>
		);
	}
}
