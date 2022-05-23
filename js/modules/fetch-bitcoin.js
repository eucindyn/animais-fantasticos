export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const bitcoinPreco = document.querySelector(target);
      bitcoinPreco.innerText = (2500 / bitcoin.BRL.sell).toFixed(3);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
