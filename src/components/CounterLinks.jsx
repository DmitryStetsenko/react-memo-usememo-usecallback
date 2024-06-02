import { memo } from "react";

export const CounterLinks = memo(({ data, resetCounter }) => {
  console.log('props: ', data);
  console.log('rerender CounterLinks');

  return (
    <div className="component-counter-links">
      <h2>Counter links</h2>
      <button onClick={ resetCounter }>Reset counter</button>
    </div>
  );
});