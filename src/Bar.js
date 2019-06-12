import './index.css';
/**
 * Sample for Bar series
 */
import * as React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DataLabel,
	BarSeries,
	Category,
	Legend,
	Tooltip
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
export let data1 = [
	{ x: 'Offer', y: 1 },
	{ x: 'Vendor Submit ', y: 3 },
	{ x: 'Interview', y: 5 },
	{ x: 'VP Approval', y: 7 }
];

/**
 * Bar sample
 */
export default class Bar extends SampleBase {
	render() {
		return (
			<div className='control-pane'>
				<div className='control-section'>
					<div>
						<ChartComponent
							id='charts'
							primaryXAxis={{
								valueType: 'Category',
								majorTickLines: { width: 0 },
								lineStyle: { width: 0 },
								interval: 1,
								majorGridLines: { width: 0 }
							}}
							primaryYAxis={{
								labelFormat: '{value}',
								majorGridLines: { width: 0 },
								majorTickLines: { width: 0 },
								lineStyle: { width: 0 },
								labelStyle: {
									color: 'transparent'
								}
							}}
							chartArea={{ border: { width: 0 } }}
							load={this.load}
							palettes={['rgb(41, 44, 96,0.5)']}
							width='100%'
							height='200px'
							titleStyle={{
								color: '#bca7a7',
								fontWeight: '700',
								float: 'left'
							}}
							title='Number of Days at each stage of recruitment cycle'
							loaded={this.onChartLoad}
						>
							<Inject services={[BarSeries, DataLabel, Category, Tooltip]} />
							<SeriesCollectionDirective>
								<SeriesDirective
									dataSource={data1}
									xName='x'
									yName='y'
									type='Bar'
									columnSpacing='0.8'
									name='Days'
									marker={{
										dataLabel: {
											visible: true,
											position: 'Outer',
											font: {
												fontWeight: '600',
												color: '#686666'
											}
										}
									}}
								/>
							</SeriesCollectionDirective>
						</ChartComponent>
					</div>
				</div>
			</div>
		);
	}
	onChartLoad = args => {
		let chart = document.getElementById('charts');
		chart.setAttribute('title', '');
	};
}
