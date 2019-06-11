import React, { Component } from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject
} from '@syncfusion/ej2-react-charts';

export default class DoughNutMod extends Component {
  state = {
    data1: [
      { x: 'United States', y: 45, text: 'USA', fill: '#00226C' },
      { x: 'Australia', y: 53, text: 'AUS: 14%', fill: '#0450C2' },
      { x: 'China', y: 56, text: 'CHN', fill: '#0073DC' },
      { x: 'India', y: 61, text: 'IND', fill: '#0D98FF' },
      { x: 'Japan', y: 40, text: 'JPN', fill: '#9CD9FF' },
      { x: 'United Kingdom', y: 20, text: 'UK', fill: '#0450C2' }
    ]
    // legendSettings: { position: 'Top', alignment: 'Near' }
  };
  render() {
    return (
      <AccumulationChartComponent
        enableSmartLabels={true}
        tooltip={{ enable: false }}
        width='100%'
        height='300px'
        titleStyle={{
          color: '#bca7a7',
          fontWeight: '700',
          float: 'left'
        }}
        title='Number of Days at each stage of recruitment cycle'
      >
        <Inject services={[PieSeries, AccumulationDataLabel]} />
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
