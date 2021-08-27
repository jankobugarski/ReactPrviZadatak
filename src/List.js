export default function List(props) {
  let proba = props.param.word;
  console.log(proba);
  //   if (proba === "") {
  //     proba = "trazena recd ne postoji";
  //   }
  return (
    <div>
      <p>
        <strong>{proba}</strong> - / {props.param.phonetics[0].text}/{" "}
        <span>
          <a href={props.param.phonetics[0].audio}>Audio</a>{" "}
        </span>
      </p>
    </div>
  );
}
