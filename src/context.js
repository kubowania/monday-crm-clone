import { createContext } from 'react'

const CategoriesContext = createContext({
  categories: null,
  setCategories: () => {}
});

export default CategoriesContext