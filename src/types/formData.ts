export type FormData = {
  step1: {
    name: string;
    email: string;
    phone: string;
  };
  step2: {
    plan: string;
  };
  step3: {
    onlineService: {
      monthly: string;
      yearly: string;
    };
    largerStorage: {
      monthly: string;
      yearly: string;
    };
    customeProfile: {
      monthly: string;
      yearly: string;
    };
  };
};
type FinalAddOns = {
  title: string;
  price: string;
};
export type ReadyDataShape = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  plan: {
    title: string;
    period: string;
    price: string;
  };
  adds: {
    monthly: FinalAddOns[];
    yearly: FinalAddOns[];
  };
  total: string;
};
