import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/context';
export default function Sidebar() {
  const context = useContext(Context);
  const [currentRoute, setCurrentRoute] = [
    context.currentRoute,
    context.setCurrentRoute
  ];
  const [list, setList] = useState([
    {
      path: '/',
      avar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADlklEQVR4nO2byWoUQRjHfzHLCLm4MCKYvEBwI6KvYIInwe1iVBS9ZHkHL26HuDyBPoPGqGg0QTMaNB4kB4nRJIIQFDGTRUQSD5WBsaqmuqureprp6R98h1BT3/KfytfV1T2QkZFWuoBZYF2yeaA7wbyqwn5gGbX4ks0ll1r8bAdmqFx8qgVoBJ4QXHxXnEnkgH6gACxtWAHo2xiLkxuoBQ/GHPM/dgHvNUmUbHLjM3FwCliT4o0ATTHFU8hhLr5cBN8rYR9ipZXHmQXynuMY6Se4+JL1eoy7Dfgk+V8FDniMEYrXUhL3Ecu9DRiSxsY9xWwEHqEK3OPJvxVFKYm2srF2aWzRU8xrqMXf9uTbmh+EF2DBQ7wTqE3vOdDswXckxqRkhhAitAMPpbGCY6w9qE1vDtjh6NeJHtTlaLJ7QGuEOFuBacnXKnDQLX13zmInwDrwAeiwiNEIDGv8nPNSgQNBNx8mWwEGQsa5qpl/x1cRUcmj3nYuAi8R/6ffgReIb6kTmEIvxF3M/xLHUZveKAk2PRDbzBEpqTXgqGFOK6JYnQhTiA3MADAB/AX+AK9QL7NfgZ2+C7LlFmoRl0PO7UHt5GHtN3DIVxFROY2a2ANgk4WPDkQjtBXgopcKHNA1vY/Algi+NqNfSSY745a+G7qmVwR2O/otSD5N9xKjmvlHEH0hSDynM8Em4JnkcA04FtVhGQuSX9NW+ptm/jzBxZcs8pHYTY2zK1GdSawQXoCfmvm2fcQaXdMbRuzOfDAh+TbdSzzVzI9VgE7Ub2gacRjhi/OET/6SZn5QgZEFyANfpMlLwF4bJyFoBt4SXPw79KsuFgEqNb2TYR1YkkecGVYq/g2Vz/liEWBQM/F62MkRaUIs8THgF+KgpQBcwHyY6ixAmOvoYyo3vapchw04CxB0HZ1BPHaqRFWuwwZiFWAZsf21SSDIfOMsQDd6ET4DhyMkUHMCJJ2Aaw+peQFce0ik+A2BZYVHDir7th0PwtV/A9gdXqSSqj06joDrCglF3a+AcgGS3sklTiJdOOnxBukDNnjpwkmP130PMF0FqtKFk6buV0AmQNIJJE0mQNIJJI3LPqDWyfYBkAmQCWCzE6x1tD2u7ldAuQBL0lgb6aFd+ruo+5D8unvp+Xyto3u/QPu6fh/qoUFaTfuDjRzmR9NpsUmgRScAiLey0ixCqB9ttSCWyDjq66m1aEXEq7a9GL75jHrlHytvq0MDnmCuAAAAAElFTkSuQmCC',
      title: 'DashBoard',
      style: 'sidebar-func-a'
    },
    {
      path: '/order',
      avar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVRoge2YTQrCMBCFP8WfM4g9oAu9j3gfXejCjZ6k7nURugmVJiHNNOV9ECg0Ke91MjMkIIQQliwC5nxHVxFGr9ZlaRW5kQFrVglrQvImB0G5V30EZMAaGbAmpQr5+NXCr1KhnTypulUfARmwJkcODO3dUTt39RGQAWvUB6yRAWtKna5SGMotYAYRkAFr+vqA1U2c+kCVzNLAp7gKR/PnGaD9t6jPwDuLnHguOOENcPbevWI+dMJVoimNQ4yBLfCcgOhu3IF1jAGA/URMPIBdrPiODXAEbrgkKiW6Ba64bRP954UQoiw/8KOVlcAYGsEAAAAASUVORK5CYII=',
      title: 'Order',
      style: 'sidebar-func-a'
    },

    {
      path: '/management',
      avar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACTklEQVRoge3Zu0/VYBgG8B9eAoOXRSUxOGCMLBg3E4KDMfgXMLjh4OZk4uagq+66OIgrhngbvS2wmTgY3RQWBU1g8LgQJByHUxA+2h4ovRySPsmXtG+f7+3z9Lu2pUaNGjU6GacwiQaaJZcGnmFgN+IXKxAelkX0ZTEw2QHi18rTJJFdKQYaOLxD00WhgaNxF9IMNIvRkhmxWveVrSJvHMgxV1prxiGXFt7zLVAbqBp5joFKZq093wK1gapRG6gatYGqkec6kBVNfMRLTGEe36P4MZzBUNbERZZVTOBsFnFVG/iKC0UJL9rAFE4ULb4oA+9xMOWeo1pda2M3G00TWeYsNIur+JvCOWfzi1EXBrPeMO8B267Pn8Z0TN3p6FqlBiaC3F14gYdaT/geVlLqr0ScQTzAc9t4hc3z6YdT5bUc8o6VZeBDkPcQfuSQ9yeOlLESvwrOb+FkCn8Gb6PjK+hP4PXiZtqN82qBS0Hei5hL4D5GzwZuD8YTuPMYLsNA3FahFwsB71sgfqOJmYC7EOUoZR2Yi4n9QncQe4OlGO6S/11qDd1RjlQDf7YpsB1WE+LN4HwnX/bW66YZCF1nxfGYWC+Wg9iI5C40EsSWoxypGJDPD47LQd5hrQEYxx23dRA/SeDOa00IqejT+rnwexcGbgc577Thz+BRVGbbcO+2M1AEcl3ISta+jrFtCGxXxmB/ycLX8Ann8Q7XtX4hDUmeVFZwHzei8zlbu2bl6Je8nU7aTnTUZ5VZrcUsxOvoWiw6yQB8tnmBa+JLWoV/700a8kTyLEwAAAAASUVORK5CYII=',
      title: 'Management',
      style: 'sidebar-func-a'
    },
    {
      path: '/customer',
      avar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACk0lEQVRoge2Zv2sUQRTHPwax8QcIQoLchSNqguT/sLC01SL2dhb2Nrn8FRGsIodJCiMWaiolWmqq4C/CnQSM4RKxUi/FvoW9uZm5nZnduY3cF15xb2a+3/duZ3be7MAY/x9OA3eB98BvsXfAgrRVGheBLaBnsC3pU0lMAG8xB5/aG+lbOdxhePCp3Y4VVB1oAYcOwaX2DKiJbXiMPwRWgbmQ4Pc9hFOrKVy+PD9lvDNaAaJFJtADnvgk4DNtsrYhgdeB54FcXVOQpywJ9Ib0VdtDMYxfG2slX2cuGCcwaoTUJrb1Ew0n/gn4JHAJeAVcz/iuAa+ByRzjF8RKh/ouTrEmv3eBGbFd8a0N4ZwHfonNe+rnhomgAXwR31exnvgaFr6zwHaGb1t80RMAmAY+Zdq+kTwJG5Y1nMue+rlgI6gxmIDt39fxhug7CakEl4EdBqfQjrTl5fXVzw0TwTrmRbzuI+SoH0wwRfIanc34ZsU35SPkqB+PQMEZYAnoAG2gKb7S9ItOoKnhbJapX3QCHQ3n91D9mLWQLoi/oaQxEpghqVwfa9p0vsJQxBS6BRwB90kWbJNkAVd+EU8AD4F/MvZRZP0ggvPAUxnzB3iA3+FnJAlcBT5K/33ghqbPJIPniWlgk/6CMHoCN4ED6fsBuGLop5Yi2fJ8M0B/ACYC0466Kv1awDkLr1oMpsGnCZWegGlHvQDcI998rwOfM+M79NdWpSbguqPqoJ4n9uhfEzb93DARtDVtbQfeSk6hRQfeSixilx1Vhe480SAJPnsszZVAyNfpspFL/8R/mbN9Gz0iKQtS+BZ0RcB4wWF7Ai9LCMQXL3wGzZFcsKmLKbb9oP++zQl1kgu27ggC7wIrIcGPEQPHtxcjtmuSOTAAAAAASUVORK5CYII=',
      title: 'Customer',
      style: 'sidebar-func-a'
    }
  ]);
  useEffect(() => {
    let cloneList = list;
    console.log(currentRoute);
    cloneList.forEach((e) => {
      e.style = 'sidebar-func-a';
      if (e.path === currentRoute) {
        e.style = 'sidebar-func-a1';
      }
    });
    let t = Object.assign([], list);
    setList(() => t);
  }, [currentRoute]);

  const handleClick = (el) => {
    sessionStorage.setItem('path', el.path);
    setCurrentRoute(() => el.path);
  };
  return (
    <div className="sidebar-main">
      <div className="sidebar-title">
        <NavLink
          to="/"
          onClick={() => handleClick(list[0])}
          style={{
            color: '#fff',
            fontSize: '19px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textDecoration: 'none'
          }}
        >
          My shop
        </NavLink>
      </div>
      {list.map((el) => {
        return (
          <div className="sidebar-func" key={shortid.generate()}>
            <NavLink
              to={el.path}
              className={el.style}
              onClick={() => handleClick(el)}
            >
              <img src={el.avar}></img>
              <h2>{el.title}</h2>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
