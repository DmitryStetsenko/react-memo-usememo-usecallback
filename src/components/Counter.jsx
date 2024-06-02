import { useCallback, useMemo, useState } from "react";
import { CounterInfo } from "./CounterInfo";
import { CounterLinks } from "./CounterLinks";
import { expensiveTask } from "../utils";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [linksData, setLinksData] = useState('data');

  const clickHandler = () => {
    setCount(prev => prev + 1);
  }

  const linksComponentsData = useMemo(() => (
    { linksData }
  ), [linksData]);

  const resetCounter = useCallback(() => {
    setCount(0);
  }, [])

  const expensiveResults = useMemo(() => expensiveTask(), []);

  return (
    <div className="component-counter">
      {/* <CounterLinks data={ {linksData} } /> */}
      {/* <CounterLinks data={ linksComponentsData } /> */}
      <CounterLinks data={ linksComponentsData } resetCounter={ resetCounter }/>
      <CounterInfo count={ count }/>

      <button onClick={ clickHandler }>Increment</button>

      <p>expensive results: { expensiveResults }</p>
    </div>
  );
};