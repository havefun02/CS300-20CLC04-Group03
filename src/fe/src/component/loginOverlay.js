import { FacebookApi } from './facebookApi';
import { GoogleApi } from './googleApi';
import './loginOverlay.css';
export default function LoginOverlay({ props }) {
  const [overlay, setOverlay] = props;
  return (
    <div className="overlay">
      <div onClick={() => {}} className="overlay-flex-box">
        <div className="overlay-title">
          <h3>Join to my team</h3>
          <h5>and the new arrivals</h5>
        </div>
        <div className="overlay-avar">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABX0lEQVRIid2VX0rDQBDGf0abl3qSqGdQqT6ICLVIr1CsNHgE+6QETyG2p/HFf9iq1UNYqE+NDztLtmGT7KpP/WAI2Zn5vskkM4FlRwi0gSEwAqZib8BAfLXfkreACZBW2ARo+hAHQGIQ3AMxEAF1sQjoAY8SMweugRUXAU3+DXREsKyYLjCTnKSKvGWQb7tUI2gYIodFQSFZzzse5BpnkvsJrNkC2mQ9L2uLxkXuPgCehOPYljAUZ+xInlrOYzkf2JLG4owcyW0CW3I+tiV+iXPdkbzKALdem5h5xi/gP1s00gfmE9zJdd9BoF/g281xLUB/pg/8/TO17qYQeJeAUweBPHqS+0HBoIEaEL0qdjzI9yQnBQ6qgq8MkS6wWhIboCrXe+jSpZrAEElRK/kc2EDNSB3YRE3tM9m6TnBc1xpN1J+raqBegSMfYhM14AS4BV5Q0z5FzcyN+Apf6HLgB2vte5a967IvAAAAAElFTkSuQmCC" />
          <h3>Login with</h3>
        </div>
        <div className="overlay-gr-button">
          <div className="overlay-gg">
            <GoogleApi />
          </div>
          <div className="overlay-fb">
            <FacebookApi />
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
