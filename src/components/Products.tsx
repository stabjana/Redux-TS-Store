import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";
import { useAppDispatch } from "../hooks/hooks";

const Products = () => {
  const products = useSelector((state: RootState) => state.products); // from our store, because we difined the type
  const dispatch = useAppDispatch();
  // console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
