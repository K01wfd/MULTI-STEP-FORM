interface Props {
  buttonText: string;
  onNextStep: () => void;
}
function Button({ buttonText, onNextStep }: Props) {
  return <button onClick={onNextStep}>{buttonText}</button>;
}

export default Button;
