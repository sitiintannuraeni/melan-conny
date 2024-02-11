const thouSep = ".";
const decSep = ",";

export default function NumberFormatCurrency({ value, sepComma = false }) {
  let formatterCurrency = (Math.round(value * 100) / 100)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .replace(/[,.]/g, function (m) {
      return m === "," ? thouSep : decSep;
    });
  let result = sepComma ? formatterCurrency : formatterCurrency.split(",")[0];

  return "Rp. " + result;
}
