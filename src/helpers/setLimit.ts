function setLimit(
  amount: number,
  nominals: any,
  limitsPercent: any,
  allLimitInBank: number,
  limits: any,
  notEnough?: boolean,
): any {
  if (amount === 0) return {};
  if (notEnough) return;
  if (!nominals.length) return;

  let currentNominal = nominals[0];
  let limitPercent = limitsPercent[currentNominal];
  let i = Math.ceil((allLimitInBank / 100) * limitPercent);

  for (i; i >= 0; i--) {
    let result = setLimit(
      amount - i * currentNominal,
      nominals.slice(1),
      limitsPercent,
      allLimitInBank,
      limits,
      notEnough
    );
    if (result) {
      return i
        ? { [currentNominal]: limits[`${currentNominal}`] - i, ...result }
        : result;
    }
  }
}

export default setLimit;
