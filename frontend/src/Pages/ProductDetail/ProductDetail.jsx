import classes from "./ProductDetail.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { productURL } from "../../API/endPoints";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`${productURL}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  );
};

export default ProductDetail;
