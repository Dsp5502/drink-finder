import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const { data } = await axios(url);
      setCategory(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider };
export default CategoryContext;
