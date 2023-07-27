import './index.css';

const CardBlock = (props: any) => {
  return (
    <div className="card-block">
      <img src={props.cardData.imageUrl} alt="Card Art Not Available" />
      <h5>{props.cardData.name}</h5>
      <p>Set: {props.cardData.setName}</p>
    </div>
  );
};

export default CardBlock;
