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
	{ x: 'Offers', y: 3, text: '3' },
	{ x: 'Interviews', y: 8, text: '8' },
	{ x: 'MSP approved', y: 35, text: '35' },
	{ x: 'Vendor Submit', y: 86, text: '86' }
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
							title='Candidate Pipeline Metrics'
							titleStyle={{
								color: '#bca7a7',
								fontWeight: '700',
								float: 'left'
							}}
							style={{
								padding: 0,
								margin: 0,
								border: 0
							}}
							height='350'
							legendSettings={{ toggleVisibility: false, position: 'Bottom' }}
							tooltip={{
								enable: true,
								format: '${point.x} : <b>${point.y}%</b>'
							}}
						>
							<Inject
								services={[
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
									width='100%'
									height='60%'
									neckWidth='10%'
									pyramidMode='Surface'
									gapRatio={0.1}
									neckHeight='12%'
									dataLabel={{
										name: 'text',
										visible: false,
										position: 'Inside',
										font: {
											fontWeight: '600'
										}
									}}
									palettes={['#37474F', '#546E7A', '#78909C', '#B0BEC5']}
									style={{ height: '200 !important' }}
								/>
							</AccumulationSeriesCollectionDirective>
						</AccumulationChartComponent>
					</div>
				</div>
			</div>
		);
	}
}
