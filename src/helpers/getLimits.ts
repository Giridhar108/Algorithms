import getProportion from "./getProportion";
import setLimit from "./setLimit";

function getLimits(ammountRequired: number, limits: any) {
  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a)
    .filter((el) => ammountRequired >= el);

  const { limitsPercent, allLimitInBank, notEnough } = getProportion(
    ammountRequired,
    limits,
    nominals
  );

  return setLimit(
    ammountRequired,
    nominals,
    limitsPercent,
    allLimitInBank,
    limits,
    notEnough,
  );
}

export default getLimits;
