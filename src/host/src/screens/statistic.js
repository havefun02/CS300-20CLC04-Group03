import Header from '../components/header';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import Dropdown from 'react-dropdown';
import './statistic.css';
export default function Statistic() {
  const [property, setProperty] = useState({
    title: 'Statistic',
    notify: '3',
    avar: ''
  });
  const [listYear, setListYear] = useState([2020, 2021, 2022]);
  const [yearlyData, setYearlyData] = useState({
    series: [
      {
        name: 'Profit',
        data: [100, 150, 200, 101, 49, 36, 32, 233, 143, 84, 590, 200]
      }
    ],
    options: {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '$';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758']
        }
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + '$';
          }
        }
      },
      title: {
        text: 'Year',
        floating: true,
        offsetY: 255,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }
  });

  const [transaction, setTransaction] = useState({
    series: [
      {
        name: 'Amount',
        data: [100, 150, 200, 101, 49, 36, 32, 233, 143, 84, 590, 200]
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },

      title: {
        text: 'Transaction history',
        align: 'left'
      },
      subtitle: {
        text: 'Amount',
        align: 'left'
      },
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      xaxis: {
        type: 'string'
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
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
          <div
            style={{
              display: 'flex',
              flex: '0 0 50%',
              padding: '0px 15px',
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div className="statistic-revenue-year">
              <Chart
                options={yearlyData.options}
                series={yearlyData.series}
                type="bar"
                height={280}
                width={600}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '15px'
                }}
              >
                <Dropdown
                  options={listYear}
                  placeholder={listYear[listYear.length - 1]}
                ></Dropdown>
              </div>
            </div>
            <div className="statistic-transaction">
              <Chart
                options={transaction.options}
                series={transaction.series}
                type="area"
                height={280}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '15px'
                }}
              >
                <Dropdown
                  options={listYear}
                  placeholder={listYear[listYear.length - 1]}
                ></Dropdown>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flex: '0 0 50%',
              padding: '0px 15px',
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div className="statistic-new-customer">
              <Chart
                options={transaction.options}
                series={transaction.series}
                type="area"
                height={280}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '15px'
                }}
              >
                <Dropdown
                  options={listYear}
                  placeholder={listYear[listYear.length - 1]}
                ></Dropdown>
              </div>
            </div>
            <div className="statistic-order">
              <Chart
                options={yearlyData.options}
                series={yearlyData.series}
                type="bar"
                height={280}
                width={600}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '15px'
                }}
              >
                <Dropdown
                  options={listYear}
                  placeholder={listYear[listYear.length - 1]}
                ></Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
