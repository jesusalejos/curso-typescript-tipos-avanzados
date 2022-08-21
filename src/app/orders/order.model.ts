import { BaseModel } from '../base.models';
import { Product } from '../products/products.models';
import { User } from '../users/users.models';

export interface Order extends BaseModel {
  products: Product[];
  user: User;
}
