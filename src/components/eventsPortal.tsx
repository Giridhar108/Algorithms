import React, { Dispatch, useState } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLimitCustom } from "../features/counter/bank";
import { formatPrice } from "../helpers/formatPrice";

interface IEventsPortal {
  active: boolean;
  setActive: Dispatch<React.SetStateAction<boolean>>;
}

function EventsPortal({ active, setActive }: IEventsPortal) {
  const dispatch = useAppDispatch();

  const { variantsLimit } = useAppSelector((state) => state.bank);

  const handleVariant = (number: number) => {
    dispatch(setLimitCustom({ number }));
  };

  return ReactDOM.createPortal(
    <>
      <button className="setLimit" onClick={() => setActive(false)}>
        Изменить лимиты
      </button>
      <div
        className={active ? "modal" : "modal hidden"}
        onClick={() => setActive(true)}
      >
        <div
          className={active ? "modal__content" : "modal__content hidden"}
          onClick={(e) => e.stopPropagation()}
        >
          {variantsLimit &&
            variantsLimit.map((el, i) => {
              const balanceVariant = Object.entries(el).reduce(
                (acc, el: any) => acc + el[1] * el[0],
                0
              );
              return (
                <li key={`${i}`} className="modal__item">
                  <button
                    className="modal__btn"
                    onClick={() => handleVariant(i)}
                  >
                    Вариант {i + 1}
                  </button>
                  <div className="modal__balance">
                    {formatPrice(balanceVariant)} р
                  </div>
                </li>
              );
            })}
        </div>
      </div>
    </>,
    document.getElementById("portal")!
  );
}

export default EventsPortal;
