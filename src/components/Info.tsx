import React, { useState } from "react";

interface Iinfo {
  numbers: number | string;
  openInfo: boolean;
}

function Info({ numbers, openInfo }: Iinfo) {
  return (
    <div className="info">
      <div className="info__budget">
        <h2 className="info__budget-title"> Введите сумму:</h2>
        {Number.isNaN(numbers) ? (
          <p className="info__budget-error">Вводите только цифры</p>
        ) : (
          <p className="info__budget-value">{numbers}</p>
        )}
      </div>
      <div className="info__balance">
        <div
          className={
            openInfo ? "info__balance-all" : "info__balance-all hidden"
          }
        >
          Всего: 10000000000
        </div>
        <ul
          className={
            openInfo ? "info__balance-list" : "info__balance-list hidden"
          }
        >
          <li>5000р: 100</li>
          <li>2000р: 400</li>
          <li>1000р: 1000</li>
          <li>500р: 3000</li>
          <li>200р: 5000</li>
          <li>100р: 8000</li>
          <li>50р: 10000</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
