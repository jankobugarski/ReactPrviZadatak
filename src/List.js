export default function List(props) {
  // let proba = props.word;
  console.log(props.param.word);
  return (
    <div>
      {/* <p>{props.param.word}</p>
        <p>{props.param.phonetics[0].text}</p>
        <a href={props.param.phonetics[0].audio}>Audio</a> */}
      <p>
        <strong>{props.param.word}</strong> -/{props.param.phonetics[0].text}/{" "}
        <span>
          <a href={props.param.phonetics[0].audio}>Audio</a>{" "}
        </span>
      </p>
    </div>
  );
}
