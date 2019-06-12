import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	Inject,
	AccumulationLegend,
	FunnelSeries,
	AccumulationTooltip,
	AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
export let data1 = [
	{ x: 'Placement', y: 2.3, text: '2' },
	{ x: 'Offers', y: 3.5, text: '3' },
	{ x: 'Interviews', y: 9.3, text: '8' },
	{ x: 'MSP approved', y: 40.7, text: '35' },
	{ x: 'Vendor Submit', y: 100, text: '86' }
];
export default class Funnel extends SampleBase {
	render() {
		return (
			<div className='control-pane'>
				<div className='control-section row'>
					<div className='col-lg-9'>
						<AccumulationChartComponent
							id='funnel-chart'
							ref={funnel => (this.funnel = funnel)}
							title='Candidate Funnel'
							titleStyle={{
								color: '#bca7a7',
								fontWeight: '700',
								float: 'left'
							}}
							legendSettings={{ toggleVisibility: false, position: 'Bottom' }}
							tooltip={{
								enable: true,
								format: '${point.x} : <b>${point.y}%</b>'
							}}
						>
							<Inject
								services={[
									AccumulationLegend,
									FunnelSeries,
									AccumulationTooltip,
									AccumulationDataLabel
								]}
							/>
							<AccumulationSeriesCollectionDirective>
								<AccumulationSeriesDirective
									dataSource={data1}
									xName='x'
									yName='y'
									type='Funnel'
									width='60%'
									height='80%'
									neckWidth='5%'
									gapRatio={0.03}
									neckHeight='25%'
									dataLabel={{
										name: 'text',
										visible: true,
										position: 'Inside',
										font: {
											fontWeight: '600'
										}
									}}
								/>
							</AccumulationSeriesCollectionDirective>
						</AccumulationChartComponent>
					</div>
				</div>
			</div>
		);
	}
}
