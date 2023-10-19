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
      period: string;
      price: number;
    };
    largerStorage: {
      period: string;
      price: number;
    };
    customeProfile: {
      period: string;
      price: number;
    };
  };
};
