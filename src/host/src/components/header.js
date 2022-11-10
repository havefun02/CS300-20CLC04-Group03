import './header.css';
export default function Header({ props }) {
  const handleClick = () => {};
  const toBase64 = (buffer) => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  return (
    <div className="header">
      <div className="header-flex-box">
        <div className="header-left-group">
          <div className="header-title">
            <h2>{props.title}</h2>
            <h4>
              {props.optional} {props.number}
            </h4>
          </div>
        </div>
        <div className="header-right-group">
          <div className="header-notification">
            <button onClick={handleClick}>
              <h4>{props.notify}</h4>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAABmJLR0QA/wD/AP+gvaeTAAAFBElEQVR4nO2bW2xUVRSGv7bSVoESpKURCqHEGJBiVGI0QnzxUiE+iiaEaHjRhIgxEIPGBEx8EC+JxhsWSTSoMSleHjRVAbXxgWjU1gtFLNKHxhu2incELOPDv4+R6dkzc87sc6nuL5mczKx91lpnnX1fe8Dj8Xg8Ho/H4/kf0Q7cDcxwpK/Z6Gt3pC8XzAa2AseA34FzHeldZPQdA54AZjnSmxkrgR/RA3Xh/oFagC3AUeBn4CbH+lNhGrATKABvA/MquKceuBMYAk4Ah4A7zO/laAd6jb1uoCm6y9nQCvSh2nQ7UFvBPQ3AW8BJ4FVUW14z33dTWcBqgY3AceBDVOtyzVxgEPgN6Ixw32YUmBuLfl+DasumCLqWo77sANAW4b5UmQJ8gvqoSyoofx7wINCPmt1OS7mXjLwfeABYXIHuS4GfzD2TKyifKrXAK+ihrihT9mLUtArAn0APcC+qlWHMNfIeU74AvAlcVMZOJ/AXCnYlXUFq3IoeYl2JMo3AI6i5fQ2sJ3pH3ARsAL4xeh5C/Z2N24xft0S0kxiz0bDdU6JMG2qiJ4FHgTOqtDkZeMzo6zc+2HjD+JeLeVg36lBtM+k24CDq9Jc7tr3C6B3EHrD5wB/AC45tR2YBerubLfKp6EGOoE43CZYa/QfQIBPGPcAYcE5CPlTEU6hWNVvk25GTVybsx1XGzpMWeQuqXVsT9sPKNLTMeNwiX4E61/tS8ud+VMuvtsi7UMAymd1fj4IRNqeqBT4DvgAmpeRPPeobPwZqQuTLkL8rU/LnFJ4DviN8DtOJHFudqkdaARSAy0NkdcAIsCNVjwyHgactsh3AD2hulSanoxXEMxb5s+gFxyLuzHam+fSFyGpQhxvMuNPkKPC6sR/WFPvQQt82IJUkbrAWmuvnIbKzjUO9MXVXyzvAWYTP+/aba6wNyLjBmoWG6n0hsmAusz9ElgYD5rogRPYpGjFTnc3XA0sssrWok21Nz51TaDX211rkS6hsf2wcp8V06DjwkUU2E7290Zi6q2XU2Ldt/tn8LksSWxctaEQaS0B3JYyh5Y+rLNI/JBWskQT0RmGEBLaVkwhWM/B9AnqjMErM6UEpfM2KQFI1K6vOPWCUCRCsRjQaxl5SOOJbNIWINUWw4TpY84zOQ471RmUILZxtSZBYuA5WsMTIOliB/fkulboOVoe5fulYb1QOmusil0pdB+tCYJjsR8PDKF12gUulroN1PlUsJxzzAfb1ayxcBmsOWum/71BnNbyHtpJykS8s5ma02nd1WK1aFiN/1mTtSBi7UY4wTwxROlOeCR1oW+SurB0pIjjKtLBcwTTpBn4BpmftSBEzgF/JQeo+IEg/5a1WBWwim7TcOG5AGZVd5OwM1L+oA/agbHRmAduG3lgv+Wt+xZwJvIv87Urb+DXG8MPkt0YVU4f8LeD+6JOVGpQvHCT9jHO1NKLzFwOEJ2Gdcxl6O6vSMJYAq5D/y9Iwth1lT0qd5cwzDcj/bWkYG0Cj30RmFzoSFYk4SdY56Iz5xhj35oUpON5FtbEPtfmJ/gk7p5FrNiDHp5Yp12TKrU/coxJkPUcKTtosLVMuGLkGSpb6j9OA/m2xF3v/OQlt5H2F49TWROQ6tI3yIuOXTdOBl4382pT9yi3r0J+SjqCDvVuA5833E+Tovzd5oQMdnB1Gf+wcRgd8naazPB6Px+PxeDwej8fjqYa/AWN3LReV4EPjAAAAAElFTkSuQmCC"></img>
            </button>
          </div>
          <div className="header-profile">
            <img src={`data:image/png;base64,${toBase64(props.avar)}`}></img>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAzklEQVRoge3ROw7CMBCE4REFMrdNyb0okpwOGkYJFlYSx49dmF/azsV8MqCUUkoppVp26T1gR5sbrwAeAO71t2Q3AJgA3FIPiHi+zyJmwLJvRgITQ6xh1ghCQuqxVcwhBLOGyUIwK5hTCNYbUwTBemGKIlhrTBUEa4WpimC1MU0QrBamKYKVxnRBsFKYrgh2FmMCwXIxphDsKMYkgu3FmEawLYwLBEthXCFYADDic/j6RjhAsG8/4+Yn4mKMSwQjxjWCBfwAQimllFLqn3sB3HSxLkcapNkAAAAASUVORK5CYII="></img>
          </div>
        </div>
      </div>
    </div>
  );
}
