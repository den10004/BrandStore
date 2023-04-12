import "../App.css";

function Card({
  id,
  title,
  image,
  currency,
  price,
  brand,
  setBasketArr,
  basketArr,
}) {
  const cards = {
    border: "1px solid black",
    borderRadius: "10px",
    width: "200px",
    height: "auto",
    padding: "10px",
  };

  const cardsContent = {
    display: "flex",
    flexDirection: "column",
  };
  const cardsButton = {
    marginTop: "10px",
  };

  const addBasket = () => {
    let product = {
      id,
      title,
      image,
      currency,
      price,
      brand,
    };
    setBasketArr([...basketArr, product]);
  };

  return (
    <div style={cards}>
      <div style={cardsContent}>
        <span>Бренд {brand}</span>
        <img src={`/src/assets/${image}`} alt={brand} />
        <span>Товар: {title}</span>
        <span>
          Цена: {price} {currency}
        </span>
      </div>
      <div style={cardsButton}>
        <button className="button colorBlue" onClick={addBasket}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default Card;
