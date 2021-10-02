import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./app/hooks";
import Display from "./components/Display";
import EventsPortal from "./components/eventsPortal";
import { setLimitsDefault } from "./features/counter/bank";
import "./style/index.scss";

function App() {
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(true);

  useEffect(() => {
    dispatch(setLimitsDefault());
  }, []);

  return (
    <div className="App">
      <Display />
      <EventsPortal active={active} setActive={setActive} />
    </div>
  );
}

export default App;
