import { InputInterface } from '../interfaces/steps';
interface InputProps {
  details: InputInterface;
}
function Input({ details }: InputProps) {
  return (
    <div>
      <label htmlFor={details.id}>{details.label}</label>
      <input
        type={details.type}
        placeholder={details.placeHolder}
        id={details.id}
      />
    </div>
  );
}

export default Input;
