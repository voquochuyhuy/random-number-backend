
import { CreateCustomerInput } from '../../graphql.schema';
export class CreateCustomerDto extends CreateCustomerInput {
  
  readonly  name :string;
  readonly  phone :string;
  readonly  birthday :Date
  readonly  adress : string;
  readonly  eventName : string;
  readonly  checkinTime :Date
  readonly  code : string;
  
}