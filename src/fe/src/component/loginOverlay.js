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
            <img src="data:image/png;base64,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"></img>
          </div>
          <div className="overlay-fb">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEg0lEQVRoge2YS2icVRTH/+d+M5N3U9sami8T0GBpjMGKRkZdFVpcVrNoUBpFTTIW4wvdFcUoui0US7F5IIrFVd00biy4EGyFkpaWNMQoiElmGm0eNZkmmZnv3uMiqTSZ+70zgjK/5bn33PM/332d7wIlSpT4T0NbNVB0aHqflDhAJJ5g8F4CGgGqXmvlDDMmiWiCSV00CN/nu+JXtyJuuASGbtYIlU0KUBcDD/oKzBhT4CGVj/Wjty4TVEKwBPo4IuKpN4jpPQA7ggZfZ45BH6tU/Un0keXX2X8Cp9PNQvDXBDzi29cBBq4ogefR1fCzHz9fCRj9qUMgnAFQ7Uudd5ZAOCK7G855dRBeOxqD6RdAOIviiQeAGjC+MQbSnV4dPM3A+pc/CyASWJo/LDC3y2R82K2jewKfTe0xDDECoCaMoooIwaw0UBsjLFuMnGT8uaqQybOdS0YqehyvmuNO4zon0McR0ZC+FHTDEoDDTRV4raUKiboooqIwXPv5eZz7fVXrz8BllTITTqeT45JYPyoDiY8Kwhf7t6OjqcKxn9MXJOBRYd7oVcAJW4223l/OVBHTMVelNnzUVuMq3gtE/D6GbtouX9sERNY6CmBXkKD1lQbeaq0K4qpjp5DZHrtG2yW0Xh4E4nBTOWKa9X4rp3Bq7DamMvIf29W5vOt4AtSlgOO6Nm0C0aHpfUr5q23uJnFvTGt/5rt5/DiT8z0eE1pigzOtue7do5vbtEtIKhz0HeUuGquNAtvofD6Q+DtYSh3Q2bUJEEQicCQAtbHCYa/N+67TNkDET+rs2gQYaA4TzNCcjfNZFWZIMLBXZ7eZATZDRdMLCAUBcZ3d7hgNVTYUCa2m0MXZB4/V4PWWjWf+Ns0eSDZXovOBwott//Asri8E3x92CSwB2OllgAqDcE+Ze1VeZhDKNm0OBvDbktQ76DUVYLOJKe111DBMZiSWLW+7g4Fpnd1mE8OxhN0qJv7yvnQI0P5q6meA1U8BNfli/Jb3BBh0QWfXVrOxgamHJYSnd5uKCKF809q+cGgX9tRu3F4D48s4dmlxg23FYqxKb0vIYNGaS9Zf32zXbuJcT+M1MTA9SqBWt4FXLMbKpnWs07QqGQsBLzNijOnEA07/A4zPA0UrAkrwoF2bbQKqPHIawGxRFPljTmVjA3aN9jPw4u7bDPqkKJJ8wIwPnZ4eHW8glao/ycCVrZflmRG13Tzl1MH5Cu0jS5HqAGPRsV9xyEhFneggx6vavQbobvwVAp0AwhX0/rBA/JzbmxDg8Wlx7a2SXsa/k4QFppdkd/xbL509v43KHvMrMLfDpqjaEhiLIH5WJs0zXl08JwAAMhkflsxtDFz2r86VEalUm9cvfwdfCQAAkvEJlTITzPQ2gDnf/oXMMuNNWWsmcLTxF7/O/hMA1k6npHlC5qL3MfO7DGiveScYPMrE78hc9H6VbPjU7bSxI9wfWW9dZv3B6Xis/8ZDFvggET81mVFPV0flth1lQgDAQlapTF79AeAHZrqoInQer9SPhYpdokSJ/wd/A7yQheTiO82sAAAAAElFTkSuQmCC"></img>
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
