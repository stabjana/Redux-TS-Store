import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { fetchRecipes } from "../store/recipesSlice";
import { useAppDispatch } from "../hooks/hooks";

export const Recipes = () => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const dispatch = useAppDispatch(); // needed to handle the complete fetch
   console.log(recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      <h1>Recipes here!</h1>
      {/* <p>{recipes[0].name}</p>  */}
      {/* <p>{recipes[0].ingredients}</p>  */}
    </div>
  );
};
