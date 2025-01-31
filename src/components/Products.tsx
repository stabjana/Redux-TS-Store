import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";
import { useAppDispatch } from "../hooks/hooks";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { addToCart } from "../store/cartSlice";
import Cart from "./Cart";

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
      <Cart />
      <Box>
        {products.map((product) => (
          <Card key={product.id}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
            
            />
            <CardContent>
              <h2>{product.title}</h2>
              <Button
                onClick={() => {
                  dispatch(
                    addToCart({
                      product: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    }))
                }
                }
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};
export default Products;
