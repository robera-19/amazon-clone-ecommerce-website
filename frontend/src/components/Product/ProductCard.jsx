import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, RenderDesc, renderAdd }) {
  if (!product) {
    return <Loader />;
  }

  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] =useContext(DataContext)

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  }

  return (
    <div
      className={`${classes.card_container} ${flex ? classes.product_flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {RenderDesc && <div style={{maxWidth: "750px"}}>{description}</div> }
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          {/*count */}
          <small>{rating.count}</small>
        </div>
        <div className={classes.price}>
          {/*price */}
          <CurrencyFormat amount={price} />
        </div>

        {
          renderAdd && <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
        }
        
      </div>
    </div>
  );
}

export default ProductCard;
