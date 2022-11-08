import './sidebar.css';
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar-title">
        <NavLink>My shop</NavLink>
      </div>
      <div className="sidebar-func">
        <NavLink className="sidebar-func-a">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABD0lEQVRoge2YMQ6CQBBFH/bGC2hpuDshnMArUYgHwAJpgFU28GfDOi+ZguYPP5A/OwuO4yxxA2qgA/qV1QENUCbQnTVpIxpMqwWuhroz6g1NxqoMdWfEfN5QPa10i4VG/RqXK5hqS3RPO4kmww2kxg2kxtLAaweNWYxaGnhYaWwdNmNNKdl+lLinNADDWaZi+BVipm8dennLSSzBUyg1WRqQ5PUHk42siRAPVR14eZONTJXXZhsZCPIaw41MhWS+ZJlChyJbAyZ5rUKV11sTaKyfqPJaYmApRjvgvMbpFzrgsmBgD4rgg7KRSjfbFDoMbiA1WRpQbWRmN3OqGzSzmznVRmZ2MweajUyp6zh/yxuZGNTcc7TV1QAAAABJRU5ErkJggg=="></img>
          <h2>DashBoard</h2>
        </NavLink>
      </div>
      <div className="sidebar-func">
        <NavLink className="sidebar-func-a">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVRoge2YTQrCMBCFP8WfM4g9oAu9j3gfXejCjZ6k7nURugmVJiHNNOV9ECg0Ke91MjMkIIQQliwC5nxHVxFGr9ZlaRW5kQFrVglrQvImB0G5V30EZMAaGbAmpQr5+NXCr1KhnTypulUfARmwJkcODO3dUTt39RGQAWvUB6yRAWtKna5SGMotYAYRkAFr+vqA1U2c+kCVzNLAp7gKR/PnGaD9t6jPwDuLnHguOOENcPbevWI+dMJVoimNQ4yBLfCcgOhu3IF1jAGA/URMPIBdrPiODXAEbrgkKiW6Ba64bRP954UQoiw/8KOVlcAYGsEAAAAASUVORK5CYII="></img>
          <h2>Order</h2>
        </NavLink>
      </div>
      <div className="sidebar-func">
        <NavLink className="sidebar-func-a">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABTklEQVRoge2YzUrDQBSFv4hvoV32KYSA71LownfpToTiA+iiW30oEaTo0tSFKaTjZObezkyG4P0gm97OOffMT5MUDMMw5sLBua4HtUWBevEAL30TC+C1QF1EowwwJaLeLkp3URoLUJvLhLGa8yPhrDM2+xWwALWZOsAK2FbwBdJv9Svgux/7yN8Qkz9KuDTAA7D21NZA54zfKPWTCRk0wH3/eQfcDWrDmT9eX8CtQj8LIYONU+v4nXXfzH8CrVI/CyGDtm/MDSFtPqafhZjBDbD3fC+0bTT6yUgMxkLEmpfqJyE1cENImtfon43G4BhC2rxWP8oS2BHe0zFaxg+sjzGfPfAMXEmFlsB7QLDUEsf83hCG2AnEagQ4AE8SodC2qR3gwx3ke6sq8guQkZOe7X2gNhagNhagNrMPkPOfOff+kVoXMfsVsACGYRj/mx9TyvlE6nx3ggAAAABJRU5ErkJggg=="></img>
          <h2>Transaction</h2>
        </NavLink>
      </div>
      <div className="sidebar-func">
        <NavLink className="sidebar-func-a">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACTklEQVRoge3Zu0/VYBgG8B9eAoOXRSUxOGCMLBg3E4KDMfgXMLjh4OZk4uagq+66OIgrhngbvS2wmTgY3RQWBU1g8LgQJByHUxA+2h4ovRySPsmXtG+f7+3z9Lu2pUaNGjU6GacwiQaaJZcGnmFgN+IXKxAelkX0ZTEw2QHi18rTJJFdKQYaOLxD00WhgaNxF9IMNIvRkhmxWveVrSJvHMgxV1prxiGXFt7zLVAbqBp5joFKZq093wK1gapRG6gatYGqkec6kBVNfMRLTGEe36P4MZzBUNbERZZVTOBsFnFVG/iKC0UJL9rAFE4ULb4oA+9xMOWeo1pda2M3G00TWeYsNIur+JvCOWfzi1EXBrPeMO8B267Pn8Z0TN3p6FqlBiaC3F14gYdaT/geVlLqr0ScQTzAc9t4hc3z6YdT5bUc8o6VZeBDkPcQfuSQ9yeOlLESvwrOb+FkCn8Gb6PjK+hP4PXiZtqN82qBS0Hei5hL4D5GzwZuD8YTuPMYLsNA3FahFwsB71sgfqOJmYC7EOUoZR2Yi4n9QncQe4OlGO6S/11qDd1RjlQDf7YpsB1WE+LN4HwnX/bW66YZCF1nxfGYWC+Wg9iI5C40EsSWoxypGJDPD47LQd5hrQEYxx23dRA/SeDOa00IqejT+rnwexcGbgc577Thz+BRVGbbcO+2M1AEcl3ISta+jrFtCGxXxmB/ycLX8Ann8Q7XtX4hDUmeVFZwHzei8zlbu2bl6Je8nU7aTnTUZ5VZrcUsxOvoWiw6yQB8tnmBa+JLWoV/700a8kTyLEwAAAAASUVORK5CYII="></img>
          <h2>Manage Product</h2>
        </NavLink>
      </div>
      <div className="sidebar-func">
        <NavLink className="sidebar-func-a">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACk0lEQVRoge2Zv2sUQRTHPwax8QcIQoLchSNqguT/sLC01SL2dhb2Nrn8FRGsIodJCiMWaiolWmqq4C/CnQSM4RKxUi/FvoW9uZm5nZnduY3cF15xb2a+3/duZ3be7MAY/x9OA3eB98BvsXfAgrRVGheBLaBnsC3pU0lMAG8xB5/aG+lbOdxhePCp3Y4VVB1oAYcOwaX2DKiJbXiMPwRWgbmQ4Pc9hFOrKVy+PD9lvDNaAaJFJtADnvgk4DNtsrYhgdeB54FcXVOQpywJ9Ib0VdtDMYxfG2slX2cuGCcwaoTUJrb1Ew0n/gn4JHAJeAVcz/iuAa+ByRzjF8RKh/ouTrEmv3eBGbFd8a0N4ZwHfonNe+rnhomgAXwR31exnvgaFr6zwHaGb1t80RMAmAY+Zdq+kTwJG5Y1nMue+rlgI6gxmIDt39fxhug7CakEl4EdBqfQjrTl5fXVzw0TwTrmRbzuI+SoH0wwRfIanc34ZsU35SPkqB+PQMEZYAnoAG2gKb7S9ItOoKnhbJapX3QCHQ3n91D9mLWQLoi/oaQxEpghqVwfa9p0vsJQxBS6BRwB90kWbJNkAVd+EU8AD4F/MvZRZP0ggvPAUxnzB3iA3+FnJAlcBT5K/33ghqbPJIPniWlgk/6CMHoCN4ED6fsBuGLop5Yi2fJ8M0B/ACYC0466Kv1awDkLr1oMpsGnCZWegGlHvQDcI998rwOfM+M79NdWpSbguqPqoJ4n9uhfEzb93DARtDVtbQfeSk6hRQfeSixilx1Vhe480SAJPnsszZVAyNfpspFL/8R/mbN9Gz0iKQtS+BZ0RcB4wWF7Ai9LCMQXL3wGzZFcsKmLKbb9oP++zQl1kgu27ggC7wIrIcGPEQPHtxcjtmuSOTAAAAAASUVORK5CYII="></img>{' '}
          <h2> New Trategy</h2>
        </NavLink>
      </div>
    </div>
  );
}
