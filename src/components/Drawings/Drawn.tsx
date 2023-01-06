import CanvasDrawn from "react-canvas-draw";

declare interface Drawn {
  id?: string;
  name?: string;
  reference?: string;
  data?: string;
  date?: string;
}

const Drawn = (props: Drawn) => {
  return (
    <div>
      <>
        <p>Drawn id {props.id}</p>
        <p>{props.name}</p>
        <img src={props.reference}></img>
        <CanvasDrawn brushRadius={8} imgSrc={props.reference} />
        <p>{props.date}</p>
        <p>{props.data}</p>
      </>
    </div>
  );
};

export default Drawn;
