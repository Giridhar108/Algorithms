import React, { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import Display from "./components/Display";
import { setLimitsDefault } from "./features/counter/bank";
import "./style/index.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLimitsDefault());
  }, []);

  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
