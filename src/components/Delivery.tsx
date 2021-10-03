import React from "react";
import { useAppSelector } from "../app/hooks";

function Delivery() {
  const { delivery } = useAppSelector((state) => state.bank);

  return (
    <div className="delivery">
      {delivery &&
        delivery.map((el) => {
          return (
            <p key={el[0]}>
              {el[0]}: {el[1]}
            </p>
          );
        })}
    </div>
  );
}

export default Delivery;
