import React, { useState } from "react";
import { useAppSelector } from "../app/hooks";

interface Iinfo {
  numbers: number | string;
  openInfo: boolean;
}

function Info({ numbers, openInfo }: Iinfo) {
  const { limits, balance, status } = useAppSelector((state) => state.bank);

  return (
    <div className="info">
      <div className="info__budget">
        <h2 className="info__budget-title"> Введите сумму:</h2>
        {Number.isNaN(numbers) ? (
          <p className="info__budget-error">Вводите только цифры</p>
        ) : (
          <p className="info__budget-value">{numbers}</p>
        )}
        {status !== "ok" ? (
          <p className="info__budget-status">{status}</p>
        ) : (
          <></>
        )}
      </div>
      <div className="info__balance">
        <div
          className={
            openInfo ? "info__balance-all" : "info__balance-all hidden"
          }
        >
          Баланс: {balance}
        </div>
        <ul
          className={
            openInfo ? "info__balance-list" : "info__balance-list hidden"
          }
        >
          {limits &&
            Object.entries(limits).map((el, i) => {
              return (
                <li key={`${el[0]}`}>
                  {el[0]}р: {el[1]}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Info;
