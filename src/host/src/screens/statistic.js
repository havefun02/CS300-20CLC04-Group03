import Header from '../components/header';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import shortid from 'shortid';
import axios from 'axios';
import './statistic.css';
const listYear = [2022, 2023].reverse();
export default function Statistic() {
  const [year, setYear] = useState(listYear[0]);
  const [fetch, setFetch] = useState(false);

  const [list, setList] = useState([]);

  const title = 'DashBoard';
  const [revenue, setRevenueData] = useState({
    series: [
      {
        name: 'Revenue',
        data: list
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
        max: 5000,
        min: 0,
        labels: {
          show: false,
          formatter: function (val) {
            return val + '$';
          }
        }
      },
      title: {
        text: `Revenue ${listYear[0]}`,
        floating: true,
        offsetY: 380,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }
  });
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const options = {
        headers: {
          Authorization: 'Bearer ' + token
          // 'content-type': 'multipart/form-data'
        }
      };
      const url = `http://localhost:3001/host/get-revenue/${year}`;
      const res = await axios.get(url, options).then((data) => {
        console.log(data);
        revenue.series[0].data = data.data;
        setRevenueData(revenue);
        setList(Object.assign([], data.data));
      });
    };
    fetchData();
  }, [fetch]);
  const Comp = ({ props }) => {
    return (
      <Chart
        options={props.options}
        series={props.series}
        type="bar"
        height={400}
        width={800}
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
              value={year}
              onChange={(e) => {
                let clone = revenue;
                clone.options.title.text = `Revenue ${e.target.value}`;
                setRevenueData(Object.assign({}, clone));
                setYear(e.target.value);
                setFetch((fetch) => !fetch);
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
                return (
                  <option value={e} key={shortid.generate()}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
