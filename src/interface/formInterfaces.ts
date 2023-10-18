export interface StepsInterfaces {
  name: string;
  email: string;
  phone: string;
  plan: string;
  period: string;
  price: string;
  addsOnTitle: string;
  addsOnPrice: string;
}
interface Error {
  error: { fieldId: string; errorMessage: string };
}
export interface ErrorsInterface {
  step1: Error[];
}
