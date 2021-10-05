function getLimits(ammountRequired: number, limits: any) {
  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a)
    .filter((el) => ammountRequired >= el);

  function proportion(
    ammount: number,
    lim: []
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

  function collect(
    amount: number,
    nominals: any,
    {
      limitsPercent,
      allLimitInBank,
      notEnough,
    }: { limitsPercent: any; allLimitInBank: number; notEnough?: boolean }
  ): any {
    if (notEnough) return;
    if (!nominals.length) return;
    if (amount === 0) return {};

    let currentNominal = nominals[0];
    let limitPercent = limitsPercent[currentNominal];

    for (let i = Math.ceil((allLimitInBank / 100) * limitPercent); i >= 0; i--) {
      let result = collect(amount - i * currentNominal, nominals.slice(1), {
        limitsPercent,
        allLimitInBank,
        notEnough,
      });

      if (result) {
        return i
          ? { [currentNominal]: limits[`${currentNominal}`] - i, ...result }
          : result;
      }
    }
  }

  return collect(
    ammountRequired,
    nominals,
    proportion(ammountRequired, limits)
  );
}

export default getLimits;
