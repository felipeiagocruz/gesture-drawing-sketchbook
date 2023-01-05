declare interface Drawn {
  name: string;
  reference: string;
  data: string;
  date: string;
}

const Drawn = (props: Drawn) => {
  return <div>{props.name}</div>;
};

export default Drawn;
