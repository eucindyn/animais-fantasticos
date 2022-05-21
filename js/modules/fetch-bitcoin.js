export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const bitcoinPreco = document.querySelector('.bitcoin-preco');
      bitcoinPreco.innerText = (2500 / bitcoin.BRL.sell).toFixed(3);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
