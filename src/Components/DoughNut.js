import React, { Component } from 'react';
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	Inject,
	Legend
} from '@syncfusion/ej2-react-charts';

export default class DoughNutMod extends Component {
	state = {
		data1: [
			{ x: 'KoncertIt', y: 90, text: 'KoncertIt 40%', fill: '#00226C' },
			{ x: 'Zemoso', y: 53, text: 'Zemoso 23.7%', fill: '#0450C2' },

			{ x: 'Tcs', y: 15, text: 'Tcs 6.7%', fill: '#0073DC' },

			{ x: 'AT&T', y: 25, text: 'AT&T 11.2%', fill: '#9CD9FF' },
			{ x: 'Cognizant', y: 40, text: 'Cognizant 17.9%', fill: '#0D98FF' }
		]
		// legendSettings: { position: 'Top', alignment: 'Near' }
	};
	render() {
		return (
			<AccumulationChartComponent
				enableSmartLabels={true}
				tooltip={{ enable: false }}
				width='100%'
				height='450px'
				titleStyle={{
					color: '#bca7a7',
					fontWeight: '700',
					float: 'left'
				}}
				legendSettings={{ position: 'Bottom', alignment: 'Near' }}
				title='Number of recruitments'
			>
				<Inject
					services={[PieSeries, AccumulationDataLabel, AccumulationLegend]}
				/>
				<AccumulationSeriesCollectionDirective>
					<AccumulationSeriesDirective
						name='project'
						dataSource={this.state.data1}
						xName='x'
						yName='y'
						type='Pie'
						innerRadius='50%'
						pointColorMapping='fill'
						border={{ width: '2px', color: '#ffffff' }}
						dataLabel={{
							visible: true,
							name: 'text',
							position: 'Inside',
							font: {
								fontWeight: '600',
								color: '#ffffff'
							}
						}}
					/>
				</AccumulationSeriesCollectionDirective>
			</AccumulationChartComponent>
		);
	}
}
