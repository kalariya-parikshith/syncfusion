import { render } from 'react-dom';

/**
 * Sample for RangeColumn series
 */
import * as React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	RangeColumnSeries,
	Category,
	Tooltip,
	Legend
} from '@syncfusion/ej2-react-charts';
import { SampleBase } from '../sample-base';
import { Browser } from '@syncfusion/ej2-base';
import { rgbToHex } from '@material-ui/core/styles';
export let data = [
	{ x: 'Vendor Submit', low: 0, high: 8, fill: '#B0BEC5' },
	{ x: 'MSP approved', low: 8, high: 12, fill: '#78909C' },
	{ x: 'Interviews', low: 12, high: 18, fill: '#546E7A' },
	{ x: 'Offers', low: 18, high: 21, fill: '#37474F' },
	{ x: 'Total', low: 0, high: 21, fill: 'rgb(0,0,255,0.5)' }
];

export default class RangeColumn extends SampleBase {
	render() {
		return (
			<div className='control-pane' style={{ marginBottom: 10 }}>
				<div className='control-section'>
					<ChartComponent
						id='charts'
						style={{ textAlign: 'center' }}
						primaryXAxis={{
							valueType: 'Category',
							majorGridLines: { width: 0 }
						}}
						primaryYAxis={{
							labelFormat: '{value}',
							maximum: 20,
							edgeLabelPlacement: 'Shift',
							lineStyle: { width: 0 },
							majorTickLines: { width: 0 },
							majorGridLines: { width: 0 }
						}}
						title='Time to close(days)'
						titleStyle={{ size: 20, color: 'rgb(0, 0, 0, 0.7)' }}
						loaded={this.onChartLoad.bind(this)}
						chartArea={{ border: { width: 0 } }}
						width={Browser.isDevice ? '100%' : '60%'}
						tooltip={{
							enable: true
						}}
					>
						<Inject services={[RangeColumnSeries, Tooltip, Category]} />
						<SeriesCollectionDirective>
							<SeriesDirective
								dataSource={data}
								name='India'
								xName='x'
								low='low'
								high='high'
								type='RangeColumn'
								columnSpacing='0.92'
								pointColorMapping='fill'
							/>
						</SeriesCollectionDirective>
					</ChartComponent>
				</div>
			</div>
		);
	}
	onChartLoad(args) {
		let chart = document.getElementById('charts');
		chart.setAttribute('title', '');
	}
}
