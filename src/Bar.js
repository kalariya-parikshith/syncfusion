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
	{ x: 'VP Approval', y: 7, color: 'black' },
	{ x: 'Vendor Submit ', y: 3 },
	{ x: 'Interview', y: 5 },
	{ x: 'Offer', y: 1 }
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
							style={{ textAlign: 'center' }}
							primaryXAxis={{
								valueType: 'Category',
								title: 'Stages',
								interval: 1,
								majorGridLines: { width: 0 }
							}}
							primaryYAxis={{
								labelFormat: '{value}',
								edgeLabelPlacement: 'Shift',
								majorGridLines: { width: 0 },
								majorTickLines: { width: 0 },
								lineStyle: { width: 0 },
								labelStyle: {
									color: 'transparent'
								}
							}}
							chartArea={{ border: { width: 0 } }}
							load={this.load}
							// palettes={['#ff0000', '#00ff00', '#0000ff']}
							width={Browser.isDevice ? '100%' : '60%'}
							title='Number of Days at each stage of recruitment cycle'
							loaded={this.onChartLoad}
						>
							<Inject
								services={[BarSeries, DataLabel, Category, Legend, Tooltip]}
							/>
							<SeriesCollectionDirective>
								<SeriesDirective
									dataSource={data1}
									xName='x'
									yName='y'
									type='Bar'
									name='Days'
									width={2}
									marker={{
										dataLabel: {
											visible: true,
											position: 'Top',
											font: {
												fontWeight: '600',
												color: '#ffffff'
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
