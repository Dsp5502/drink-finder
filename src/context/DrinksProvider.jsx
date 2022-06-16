import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalFavorite, setModalFavorite] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [favoriteDrinks, setFavoriteDrinks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!drinkId) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [drinkId]);

  useEffect(() => {
    const favoriteDrinksLS = localStorage.getItem('favoriteDrinks');
    if (favoriteDrinksLS) {
      setFavoriteDrinks(JSON.parse(favoriteDrinksLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteDrinks', JSON.stringify(favoriteDrinks));
  }, [favoriteDrinks]);

  const consultDrink = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`;
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkClick = (id) => {
    setDrinkId(id);
    setModal(!modal);
  };
  const handleModalClickFavorite = () => {
    setModalFavorite(!modalFavorite);
  };
  const addFavorite = (recipe) => {
    if (favoriteDrinks.some((drink) => drink.idDrink === recipe.idDrink)) {
      const updatedFavorites = favoriteDrinks.map((drink) => {
        if (drink.idDrink === recipe.idDrink) {
          return recipe;
        }
        return drink;
      });
      setFavoriteDrinks(updatedFavorites);
    } else {
      setFavoriteDrinks([...favoriteDrinks, recipe]);
    }
  };
  return (
    <DrinksContext.Provider
      value={{
        consultDrink,
        drinks,
        handleModalClick,
        modal,
        recipe,
        handleDrinkClick,
        loading,
        handleModalClickFavorite,
        modalFavorite,
        addFavorite,
        favoriteDrinks,
        setFavoriteDrinks,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
