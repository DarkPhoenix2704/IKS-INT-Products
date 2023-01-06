import { useState } from "react";
import "./ProductBox.css";

function ProductBox(props) {
  const { text } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="product-box">
      <img
        src={text.image}
        alt="Product IMG"
      />
      <h2>{text.title}</h2>
      <div className="card-content">
        {!isExpanded && 
        <div className="flex">
          <p> {text.shorttext} </p>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            Know More
          </button>
        </div>}
        {isExpanded && 
        <div className="flex">
          <p> {text.longtext} </p>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            Show Less
          </button>
        </div>}
      </div>
    </div>
  );
}

export default ProductBox;
