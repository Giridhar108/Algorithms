function getProportion(
  ammount: number,
  lim: [],
  nominals: number[]
): { limitsPercent: any; allLimitInBank: number; notEnough?: boolean } {
  const filteredLimit: any = nominals.reduce(
    (acc: any, el: any) =>
      ammount < el ? acc : { ...acc, [`${el}`]: lim[el] },
    {}
  );

  const allAmmountInBank = Object.entries(filteredLimit).reduce(
    (acc: number, el: any) => acc + el[1] * el[0],
    0
  );

  const percentNeed = ammount / (allAmmountInBank / 100);

  let notEnough = false;
  if (ammount > allAmmountInBank) {
    notEnough = true;
  }

  const allLimitInBank =
    Object.values(filteredLimit).reduce((acc: number, el: any) => acc + el, 0) *
    (percentNeed / 100);
  const onePercentAll =
    Object.values(filteredLimit).reduce((acc: number, el: any) => acc + el, 0) /
    100;

  const limitsPercent = nominals.reduce((acc: {}, el: number) => {
    if (filteredLimit[el] !== undefined) {
      acc = { ...acc, [`${el}`]: filteredLimit[el] / onePercentAll };
    }
    return acc;
  }, {});

  return { limitsPercent, allLimitInBank: allLimitInBank, notEnough };
}

export default getProportion;
