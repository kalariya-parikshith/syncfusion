import * as React from 'react';
import { SampleBase } from './sample-base';
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
	{ x: 'Placements', y: 2.3, text: '2' },
	{ x: 'Offers', y: 3.4, text: '3' },
	{ x: 'Interviews', y: 9, text: '8' },
	{ x: 'MSP approved ', y: 40, text: '35' },
	{ x: 'Vendor Submit ', y: 100, text: '86' }
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
							legendSettings={{ toggleVisibility: false }}
							load={this.load}
							tooltip={{
								enable: true,
								format: 'k'
							}}
							resized={this.onChartResized}
							loaded={this.onChartLoad}
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
									width='40%'
									height='90%'
									neckWidth='10%'
									gapRatio={0.03}
									neckHeight='25%'
									explode={true}
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

	onChartLoad = args => {
		document.getElementById('funnel-chart').setAttribute('title', '');
	};
	onChartResized = args => {
		let bounds = document
			.getElementById('funnel-chart')
			.getBoundingClientRect();
		if (bounds.width < bounds.height) {
			args.accumulation.series[0].width = '80%';
			args.accumulation.series[0].height = '70%';
		} else {
			args.accumulation.series[0].width = '60%';
			args.accumulation.series[0].height = '80%';
		}
	};
}
