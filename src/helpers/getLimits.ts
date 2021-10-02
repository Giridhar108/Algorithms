function getLimits(ammountRequired: number, limits: any) {
  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  function proportion(
    sum: number,
    lim: []
  ): { limitsPercent: any; allLimit: number; status?: boolean } {
    const allSum = Object.entries(lim).reduce(
      (acc: number, el: any) => acc + el[1] * el[0],
      0
    );
    const percentNeed = sum / (allSum / 100);
    let status = true;
    if (sum > allSum) {
      status = false;
    }

    const allLimit =
      Object.values(lim).reduce((acc: number, el: number) => acc + el, 0) *
      (percentNeed / 100);
    const onePercentAll =
      Object.values(lim).reduce((acc: number, el: number) => acc + el, 0) / 100;

    const limitsPercent = nominals.reduce((acc: {}, el: number) => {
      acc = { ...acc, [`${el}`]: lim[el] / onePercentAll };
      return acc;
    }, {});

    return { limitsPercent, allLimit: allLimit, status };
  }

  function collect(
    amount: number,
    nominals: any,
    {
      limitsPercent,
      allLimit,
      status,
    }: { limitsPercent: any; allLimit: number; status?: boolean }
  ): any {
    if (amount === 0) return {};
    if (!nominals.length) return;
    if (!status) {
      return "нет столько денег";
    }

    let currentNominal = nominals[0];
    let limitPercent = limitsPercent[currentNominal];

    for (let i = Math.ceil((allLimit / 100) * limitPercent); i >= 0; i--) {
      let result = collect(amount - i * currentNominal, nominals.slice(1), {
        limitsPercent,
        allLimit,
        status,
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
