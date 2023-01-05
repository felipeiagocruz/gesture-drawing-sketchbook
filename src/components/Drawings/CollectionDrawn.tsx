declare interface Drawn {
  name: string;
  reference: string;
  date: string;
  data: string;
}

const CollectionDrawn = (props: Drawn) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.reference} />
      <p>{props.date}</p>
      <p>{props.data}</p>
    </div>
  );
};

export default CollectionDrawn;
