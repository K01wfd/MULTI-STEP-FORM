export interface StepsDataInterface {
  name: string;
  email: string;
  phone: string;
  planTtile: string;
  planPeriod: string;
  planPrice: string;
  addsOnTitle: string;
  addsOnPrice: string;
}

// INITIAL DATA SHAPE
export const INITIAL_DATA: StepsDataInterface = {
  name: '',
  email: '',
  phone: '',
  planTtile: '',
  planPeriod: '',
  planPrice: '',
  addsOnTitle: '',
  addsOnPrice: '',
};

interface Error {
  error: { fieldId: string; errorMessage: string };
}
export interface ErrorsInterface {
  step1: Error[];
}
