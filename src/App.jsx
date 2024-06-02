import { Counter } from "./components";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>useMemo, useCallback, React.memo</h1>
        <Counter />
      </div>
    </>
    
  );
}

export default App;
