import './index.css';
/**
 * Sample for Bar series
 */
import * as React from 'react';

import {
	//eslint-disable-next-line
	ChartComponent,
	//eslint-disable-next-line
	SeriesCollectionDirective,
	//eslint-disable-next-line
	SeriesDirective,
	//eslint-disable-next-line
	Inject,
	//eslint-disable-next-line
	DataLabel,
	//eslint-disable-next-line
	BarSeries,
	//eslint-disable-next-line
	Category,
	//eslint-disable-next-line
	Legend,
	//eslint-disable-next-line
	Tooltip
} from '@syncfusion/ej2-react-charts';
//eslint-disable-next-line
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import Funnel from './Funnel';
import Bar from './Bar';
//eslint-disable-next-line
import BarCustom from './BarCustom';

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
				<Bar />
				<Funnel />
				{/* <BarCustom /> */}
			</div>
		);
	}
}
