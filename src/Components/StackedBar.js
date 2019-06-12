import { render } from 'react-dom';

/**
 * Sample for 100 percent StackingBar Series
 */
import * as React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingBarSeries,
	Tooltip,
	DataLabel
} from '@syncfusion/ej2-react-charts';
import { SampleBase } from '../sample-base';
import { Browser } from '@syncfusion/ej2-base';
export let data = [
	{
		x: 'Offer',
		y: 7,
		y1: 3,
		y2: 5,
		y3: 1,
		fill1: 'rgb(0,0,0,0)',
		fill2: 'rgb(0,0,0,0)',
		fill3: 'rgb(0,0,0,0)',
		fill4: '#292C60'
	},
	{
		x: 'Interview',
		y: 7,
		y1: 3,
		y2: 5,
		y3: 1,
		fill1: 'rgb(0,0,0,0)',
		fill2: 'rgb(0,0,0,0)',
		fill3: '#292C60',
		fill4: 'rgb(0,0,0,0)'
	},
	{
		x: 'Vendor Submit',
		y: 7,
		y1: 3,
		y2: 5,
		y3: 1,
		fill1: 'rgb(0,0,0,0)',
		fill2: '#292C60',
		fill3: 'rgb(0,0,0,0)',
		fill4: 'rgb(0,0,0,0)'
	},
	{
		x: 'VP Approval',
		y: 7,
		y1: 3,
		y2: 5,
		y3: 1,
		fill1: '#292C60',
		fill2: 'rgb(0,0,0,0)',
		fill3: 'rgb(0,0,0,0)',
		fill4: 'rgb(0,0,0,0)'
	}
];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
		}`;

export class StackedBar extends SampleBase {
	render() {
		return (
			<div className='control-pane'>
				<style>{SAMPLE_CSS}</style>
				<div className='control-section'>
					<ChartComponent
						id='charts'
						style={{ textAlign: 'center' }}
						primaryXAxis={{
							valueType: 'Category',
							majorGridLines: { width: 0 }
						}}
						primaryYAxis={{
							edgeLabelPlacement: 'Shift'
						}}
						width={Browser.isDevice ? '100%' : '60%'}
						chartArea={{ border: { width: 0 } }}
						title='Sales Comparison'
						loaded={this.onChartLoad.bind(this)}
						tooltip={{
							enable: true,
							format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
						}}
					>
						<Inject
							services={[
								StackingBarSeries,
								DataLabel,
								Tooltip,
								DataLabel,
								Category
							]}
						/>
						<SeriesCollectionDirective>
							<SeriesDirective
								dataSource={data}
								xName='x'
								yName='y'
								name='Apple'
								type='StackingBar100'
								pointColorMapping='fill1'
							/>
							<SeriesDirective
								dataSource={data}
								xName='x'
								yName='y1'
								name='Orange'
								type='StackingBar100'
								pointColorMapping='fill2'
							/>
							<SeriesDirective
								dataSource={data}
								xName='x'
								yName='y2'
								name='Wastage'
								type='StackingBar100'
								pointColorMapping='fill3'
							/>
							<SeriesDirective
								dataSource={data}
								xName='x'
								yName='y3'
								name='Wastage1'
								type='StackingBar100'
								pointColorMapping='fill4'
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
