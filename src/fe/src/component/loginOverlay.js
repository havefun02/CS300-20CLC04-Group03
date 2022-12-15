import { FacebookApi } from './facebookApi';
import { GoogleApi } from './googleApi';
import './loginOverlay.css';
export default function LoginOverlay({ props }) {
  const [overlay, setOverlay] = props;

  return (
    <div className="overlay">
      <div className="overlay-flex-box">
        <div className="overlay-title">
          <h3>Join to my team</h3>
          <h5>and the new arrivals</h5>
        </div>
        <div className="overlay-avar">
          <img src={require('../assets/th.jpg')}></img>
          <h3 style={{ marginTop: '10px' }}>Login with</h3>
        </div>
        <div className="overlay-gr-button">
          <div className="overlay-gg">
            <GoogleApi props={{ setOverlay }} />
          </div>
          <div className="overlay-fb">
            <FacebookApi props={{ setOverlay }} />
          </div>
        </div>
        <div
          className="overlay-exit"
          onClick={() => {
            setOverlay((overlay) => !overlay);
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg==" />
        </div>
      </div>
    </div>
  );
}
