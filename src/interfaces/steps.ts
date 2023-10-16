export interface InputInterface {
  type: string;
  label: string;
  placeHolder?: string;
  id: string;
}
export interface Step {
  stepNumber: number;
  stepTitle: string;
  stepSubTitle: string;
  inputs: InputInterface[];
}
