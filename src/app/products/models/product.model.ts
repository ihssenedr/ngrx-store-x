import {Rating} from "./rating.model";
import {Category} from "./category.model";

export interface Product {
  id? : number;
  title?: string;
  price?: number
  description? : string;
  category? : Category;
  image? : string;
  rating? : Rating;
}
