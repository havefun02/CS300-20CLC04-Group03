import Header from '../components/header';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import shortid from 'shortid';
import './statistic.css';
const listYear = [2020, 2021, 2022].reverse();
export default function Statistic() {
  const title = 'DashBoard';

  const [revenue, setRevenueData] = useState({
    series: [
      {
        name: 'Revenue',
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
        text: `Revenue ${listYear[listYear.length - 1]}`,
        floating: true,
        offsetY: 380,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }
  });

  const Comp = ({ props }) => {
    return (
      <Chart
        options={props.options}
        series={props.series}
        type="bar"
        height={400}
        width={600}
      />
    );
  };
  return (
    <div className="statistic-main">
      <div className="statistic-flex-box">
        <div className="statistic-header">
          <Header props={title}></Header>
        </div>
        <div className="statistic-content">
          <div className="statistic-revenue-year">
            <Comp props={revenue}></Comp>
            <select
              value={12}
              onChange={(e) => {
                let clone = revenue;
                clone.options.title.text = `Revenue ${e.target.value}`;
                setRevenueData(Object.assign({}, clone));
              }}
              style={{
                width: '70px',
                height: '30px',
                position: 'absolute',
                outline: 'none',
                top: '91%',
                left: '60%'
              }}
            >
              {listYear.map((e, ind) => {
                return <option key={shortid.generate()}>{e}</option>;
              })}
            </select>
          </div>
          <div className="static-data-manual">
            <div className="static-data">
              <div>
                <span>Recent Order</span>
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, ind) => {
                  return (
                    <div key={shortid.generate()}>
                      <span>Product</span>
                      <span>Email</span>
                      <span>Address</span>
                      <span>Date</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="static-data">
              <div>
                <span>New Customer</span>
              </div>
              <div>
                {[1, 2, 3].map((e, ind) => {
                  return (
                    <div key={shortid.generate()}>
                      <span>Name</span>
                      <span>Email</span>
                      <span>Address</span>
                      <span>Date</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
