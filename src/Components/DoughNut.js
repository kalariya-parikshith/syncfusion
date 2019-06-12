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
      { x: 'KoncertIt', y: 90, text: 'KoncertIt', fill: '#00226C' },
      { x: 'Zemoso', y: 53, text: 'Zemoso', fill: '#0450C2' },
      { x: 'Tcs', y: 15, text: 'Tcs', fill: '#0073DC' },
      { x: 'Cognizant', y: 40, text: 'Cognizant', fill: '#0D98FF' },
      { x: 'AT&T', y: 25, text: 'Cognizant', fill: '#9CD9FF' }
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
        title='Number of Days at each stage of recruitment cycle'
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
