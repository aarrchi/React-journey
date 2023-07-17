export const Button = (props) => {
  let btnColor = `btn btn-${props.name} btn-sm`;
  console.log(props);
  return (
    <>
      <button className={btnColor}>{props.name}</button>
    </>
  );
};
