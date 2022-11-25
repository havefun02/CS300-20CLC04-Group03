import Header from '../components/header';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import './statistic.css';
export default function Statistic() {
  const [property, setProperty] = useState({
    title: 'Statistic',
    notify: '3',
    avar: ''
  });
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct'
        ]
      },
      yaxis: {
        title: {
          text: '$'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' hundred';
          }
        }
      }
    }
  });
  return (
    <div className="statistic-main">
      <div className="statistic-flex-box">
        <div className="statistic-header">
          <Header props={property}></Header>
        </div>
        <div className="statistic-content">
          <div className="statistic-revenue">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={350}
              width={400}
            />
          </div>
        </div>
        <div className="statistic-footer"></div>
      </div>
    </div>
  );
}
