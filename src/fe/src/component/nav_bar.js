import { useState } from 'react';
import LoginOverlay from './loginOverlay';
import './nav_bar.css';
import { useContext } from 'react';
import { Context } from '../context/context';
import { useNavigate } from 'react-router-dom';
export default function Navbar({ props }) {
  const context = useContext(Context);
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  return (
    <div className="nav">
      <div className="nav-flex-box">
        <div className="nav-info-tools">
          <div
            onClick={() => {
              navigate('/newin');
            }}
            className="nav-info-search"
          >
            <h3>New In</h3>
          </div>
          <div
            onClick={() => {
              navigate('/women');
            }}
            className="nav-info-search"
          >
            <h3>Women</h3>
          </div>
          <div
            onClick={() => {
              navigate('/men');
            }}
            className="nav-info-search"
          >
            <h3>Men</h3>
          </div>
          <div
            onClick={() => {
              navigate('/bestseller');
            }}
            className="nav-info-search"
          >
            <h3>Best seller</h3>
          </div>
          <div
            onClick={() => {
              navigate('/sale');
            }}
            className="nav-info-search"
          >
            <h3>Sale</h3>
          </div>
        </div>
        <div className="nav-shopping-tools">
          <div className="nav-shopping-love">
            <span>5</span>
            <img
              onClick={() => navigate('/liked')}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABj0lEQVRIid2Uv04CQRDGf3KBRnkDTayFyjfwb2ckoPAKEolEa19AsbO3IryEJaWxEYwQtNResBBjchY7m1vW3dwdJZNM7nbm2/lmv/0Di245oAZ0gAHwJT6QWFUwc1kFeAPCGH8FymkKB8CNUeAJaAIFYFm8ILGegWsBmSQEuvg3ULcmrQGrVjOnwFTmXMcVrxjFt6zcJvAOdB3ztg2Skq94jkjzEyt3gNrcELj3zG9IfoRn42tEmpuy1IFfIq0vPQQB0BfMsQvQkWTTiuul+9yU7FxibRfBUJIbVjzumIYGtijjgYtgLMl8SoKhgc1LbKwDptZLLtYEduuoEbqA80j0yeyK/0lkruBRvnspur8DJsZ4X74PLnBV2HuoI6et6+n+A1g3cAHwLLkjF0EO9XCFqOuf1s6ILlrWByoLaArspCi+C/zI3MM4cMsgaTArl20BqnNd/CpJNxnUq6i17qNuaBFYES8CF0Sa6+KJnmttJZSecRdtRAJZfJZFPVxt4AV1JCfy30adFu+GLob9AXAzn1A8JNGEAAAAAElFTkSuQmCC"
            ></img>
          </div>
          <div className="nav-shopping-search">
            <img
              onClick={() => setSearch((search) => !search)}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABD0lEQVRIie2UPW7CQBCFP5IS0gEnoQdyAxAHSQoUUSD+Gm4DIiegoITkAOEMJIQWTDFvwY3xrqFAUZ402rX95r2xvTPwV1EGRsAHsFOsgCFQula8BWyBKCF+gOY14gcJTYAqkFfUgKme7YFGqHg5Vnn7Au9NnG+gGGIw4lx5GmbiDkIMPpVU9eDWxV2FGPwqqeDBfRJ3m0Z8iO2jgGJyvsS4wVprxSPPcb5CDN61vngYvGqdeXBPKGFNFGFHMQkdcTZk6Oom1kSRqqtjP70APGNv6Tq6Gyru0MCaKGlUbCTurvtZTIpYEy2x47vTfsD5s8RNM5mkwY0MF+N/k7sy6bmbjzc0WGAzak7gGL9vHAG+Ol6n6x8u5AAAAABJRU5ErkJggg=="
            />
            {search && (
              <div className="nav-search-expand">
                <input
                  onChange={(e) => {
                    setSearchContent(() => e.target.value);
                  }}
                  placeholder="Search"
                  style={{
                    padding: '5px 3px',
                    width: '120px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: '#f3f3f3'
                  }}
                ></input>
                <img
                  onClick={() => {
                    setSearchContent(() => '');
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA8klEQVRIie3VL0tDURzG8c8UpjBwwWoRi8Wy7DsQy+xGq9FqtI69AMEXYTIOk0HDwsqCyTYFQUWYhnsPnF02de6cti/84F7uc3/P+fPcc1nyC6vR9R3e0cc4h9lXWUOcoZnLINQLOthKbdBGL7r/wCX2UhkEWrjCZ/Ssh0PUUhgEtnGBUaQZ4BTrKQwCG2XTx0j7hHNszmOwi7UfdHUc4z565xVd7FTF8VpWRz9SRHZWwb4i0gdlrzGuFem7gZW/TK3C2381WZZomsEskm1ylRDT50jzgBMLxjTbh5b9qMh+2A0Vm9lI1ThwiyOTP6El+fkGi7Rpcs+UHfkAAAAASUVORK5CYII="
                ></img>
              </div>
            )}
          </div>
          <div className="nav-shopping-profile">
            <img
              onClick={() => {
                setOverlay((overlay) => !overlay);
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAChElEQVRYhe2XPU9UQRSGH81iI7AYG9wVO1wTC1HWGo1iAxG213/Bh9EStNDCaChBf4JGK10xsST2fsVCZTsCISCLFsu1mHeczWbm7twNCQ1vcjN35z3nzNmZc+acC4c4YBzJKF8CJoFRoAgMaH4VqAFV4CXwbb8ctCgDy0AS+bwDhvdj4S5gAdiT4XVgEbiJ2Y3jekrABLAkmUQ6T4Fcp4ufAN7L2A4wB/RG6PUC80Adtxt9WRfvwm15DXMEWXEB+CEbH4BjWZQXpPgLKHj4cTn4G9jW+5hHroAJ0AR4Ert4GXN+O8BFDz9POPjmPPKXMMfR0Htb2K33GRsX9weYAk7pmdZcgn8n7ourtlu8hIt2X8DZoJzycDPilj1cHtgQP5jmwB0JLQb4bfH9Hq5f3FZA95n46ebJoy1C1zS+DhhpaPTdoNbWXkDX2hxNc+CMxs8BIx813vJwtzWuBHQ/tazhxRZmm3oC/A1cEM5g0qwAzAJ/xV0P6PaQfkRRDgA8IpyGD1P0ohz4KqGzAb4CrKU4sCYZH2yGfUlzoCqhCQ83hgnCBHgBjOCK0RVMGU4k47sLKuLfpDlgc3mpZf4ksIknjVowK5lN6TTjOeE75D9CF9E93D9vh1eSvds0F30RgSmfCebOt1jR3EiEA1cl25yOD4jYfothzGVSxxUP22R0R+jbaF/X7zKwi4mNoRgHwHQyCaaUFmOVPCjiyvHjLIo53FHUgMsdLD4E/MRVwcytWV+TE3VMSc1H6OUxZ74r3bd00JJZ5DCdjM3/DUw6TQLnMDHRrfeKOBvtDcy2d9yUNuM8pprFtuVVIrufrB8mg7gPkwHgtOZX9dgPk+8Z7R7i4PAPqWvYPG+62Q8AAAAASUVORK5CYII="
            />
          </div>
          <div className="nav-shopping-cart">
            <span>5</span>
            <img
              onClick={() => {
                setOverlay((overlay) => !overlay);
                console.log(isLog);
                if (isLog === false) navigate('/cart');
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRIie2V3QqAIAxGT9HDVa8dvYj2HNVFeZH5NzGI7IMhDtzZnDioQSOggc0yDQwlAK7gxlQJgAmW6r+oLZFBSI21j2Ykjft4BV0sA6FuN/B4BSmAGZgEfjFgxd18nz+opLctOf+KHvyAjwGWc/X9/zGDY354NXAMkVyAAvqMQmvWDjXkPzRJsutpAAAAAElFTkSuQmCC"
            ></img>
          </div>
        </div>
        {props.isLog === true && (
          <span className="nav-name">Hi,{props.name}</span>
        )}
      </div>
      {overlay && <LoginOverlay props={[overlay, setOverlay]} />}
    </div>
  );
}
