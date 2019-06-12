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
	{ x: 'Amazus', y: 12 },
	{ x: 'Gibrakol', y: 10 },
	{ x: 'Mirasoft', y: 7 },
	{ x: 'Litmus7', y: 5 },
	{ x: 'Experis', y: 3 }
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
							id='charts2'
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
							palettes={['rgb(255,0,0,0.8)']}
							width='100%'
							height='200px'
							titleStyle={{
								color: '#bca7a7',
								fontWeight: '700',
								textAlignment: 'Near'
							}}
							title='BOTTOM 5 VENDORS'
						>
							<Inject services={[BarSeries, DataLabel, Category, Tooltip]} />
							<SeriesCollectionDirective>
								<SeriesDirective
									dataSource={data1}
									xName='x'
									yName='y'
									type='Bar'
									columnSpacing='0.65'
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
}
