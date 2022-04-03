import { Category } from '../Category/index';


export const ListOfCategories = (
  {
    categories = []
  }
) =>
(
  categories.map(x => <Category {...x}></Category>)
);