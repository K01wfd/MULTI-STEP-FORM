interface PlanProps {
  plane: string;
  icon: string;
  price: string;
}
function Plan({ plane, icon, price }: PlanProps) {
  return (
    <label htmlFor={plane}>
      <input type='radio' name='plane' id={plane} />
      <div>
        <img src={icon} alt={plane + 'icon'} />
        <h3>{plane}</h3>
        <p>{price}</p>
      </div>
    </label>
  );
}

export default Plan;
