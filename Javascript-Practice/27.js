// object destructuring

const band = {
  bandName: "band1",
  famousSong: "famousSong11",
  year: 2011
};
const {bandName,famousSong} = band;

console.log(bandName);

const {...restProps} = band;
console.log(restProps);
