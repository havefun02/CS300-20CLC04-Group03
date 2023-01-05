import './imgoverlay.css';
export default function ImgOverlay({ props }) {
  console.log(props);
  const [access, setAccess] = props;
  return (
    <div
      className="imgoverlay"
      onClick={(e) => {
        e.target.style.display = 'none';
      }}
    >
      <div onClick={() => {}} className="imgoverlay-flex-box">
        <div className="imgoverlay-background">
          <img src={require('../assets/overlay.jpg')}></img>
        </div>
        <div
          className="imgoverlay-exit"
          onClick={() => {
            setAccess((access) => !access);
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg==" />
        </div>
      </div>
    </div>
  );
}
