import "../../App.css";
import "./basketCard.css";

function BasketCard({ title, image, price, currency, brand, deleteBasket }) {
  return (
    <div className="cards">
      <span>Бренд {brand}</span>
      <div className="card__wrap">
        <img src={`/src/assets/${image}`} alt={brand} />
        <div className="card__desicription">
          <span>Товар: {title}</span>
          <span>
            Цена: {price} {currency}
          </span>
          <div className="cardsButton">
            <button className="button colorRed" onClick={deleteBasket}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
