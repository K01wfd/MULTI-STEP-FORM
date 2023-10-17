interface PlanProps {
  plane: string;
  icon: string;
  price: string;
  bonus?: string;
}
function Plans({ plane, icon, price, bonus }: PlanProps) {
  return (
    <label htmlFor={plane}>
      <input
        type='radio'
        checked={plane === 'arcade'}
        value={plane}
        name='plane'
        id={plane}
      />
      <div>
        <img src={icon} alt={plane + 'icon'} />
        <h3>{plane}</h3>
        <p>{price}</p>
        {bonus && <p>{bonus}</p>}
      </div>
    </label>
  );
}

export default Plans;
