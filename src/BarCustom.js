import {
	//eslint-disable-next-line
	AxisModel,
	BarSeries,
	Category,
	ChartComponent,
	Inject,
	SeriesCollectionDirective,
	SeriesDirective
} from '@syncfusion/ej2-react-charts';
import * as React from 'react';
export default class BarCustom extends React.Component {
	render() {
		return (
			<ChartComponent id='charts' primaryXAxis={{ valueType: 'Category' }}>
				<Inject services={[BarSeries, Category]} />
				<SeriesCollectionDirective>
					<SeriesDirective
						dataSource={[
							{ x: 'VP Approval', y: 7 },
							{ x: 'Vendor Submit ', y: 3 },
							{ x: 'Interview', y: 5 },
							{ x: 'Offer', y: 1 }
						]}
						xName='x'
						yName='y'
						type='Bar'
					/>
				</SeriesCollectionDirective>
			</ChartComponent>
		);
	}
}
