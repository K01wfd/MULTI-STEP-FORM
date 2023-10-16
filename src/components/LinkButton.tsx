interface Props {
  onPrevStep: () => void;
}

function LinkButton({ onPrevStep }: Props) {
  return <button onClick={onPrevStep}>go back</button>;
}

export default LinkButton;
