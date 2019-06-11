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
							legendSettings={{ toggleVisibility: false }}
							tooltip={{
								enable: true,
								format: '${point.x} : <b>${point.y}%</b>'
							}}
							resized={this.onChartResized.bind(this)}
							loaded={this.onChartLoad.bind(this)}
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
	pyramidneckWidth(e) {
		let neckWidth = document.getElementById('pyramidNeckWidth').value;
		this.funnel.series[0].neckWidth = neckWidth + '%';
		document.getElementById('neckWidth').innerHTML = neckWidth + '%';
		this.funnel.removeSvg();
		this.funnel.refreshSeries();
		this.funnel.refreshChart();
	}
	pyramidneckHeight(e) {
		let neckHeight = document.getElementById('pyramidNeckHeight').value;
		this.funnel.series[0].neckHeight = neckHeight + '%';
		document.getElementById('neckHeight').innerHTML = neckHeight + '%';
		this.funnel.series[0].animation.enable = false;
		this.funnel.removeSvg();
		this.funnel.refreshSeries();
		this.funnel.refreshChart();
	}
	onChartLoad(args) {
		document.getElementById('funnel-chart').setAttribute('title', '');
	}
	onChartResized(args) {
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
	}
}
