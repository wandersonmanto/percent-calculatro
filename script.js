const inputVenda = document.querySelector('#input-venda');
const inputCusto = document.querySelector('#input-custo');
const inputRange = document.querySelector('#input-range');
const textNewPrice = document.querySelector('#new-price');
const textMargemDefault = document.querySelector('#margem-default');
const textBaseDefault = document.querySelector('#base-default');
const textMargemNew = document.querySelector('#margem-new-price');
const textBaseNew = document.querySelector('#base-new-price');

function startElements() {
  
  console.log(venda);
}

function handleRangePrice() {
  let currentPrice = inputRange.value;
  let precoCusto = inputCusto.value;
  let lucro = currentPrice - precoCusto;
  let margem = (lucro / currentPrice) * 100;
  let base = (lucro * 100) / precoCusto;

  textNewPrice.textContent = `Novo preço R$:${currentPrice}`;
  textMargemNew.textContent = `Margem: ${margem.toFixed(1)}%`;
  textBaseNew.textContent = `Base: ${base.toFixed(1)}%`;

}

function handleVendaChange(evnt) {
  let precoVenda = inputVenda.value;
  let precoCusto = inputCusto.value;
  let lucro = precoVenda - precoCusto;
  let margem = (lucro / precoVenda) * 100;
  let base = (lucro * 100) / precoCusto;

  console.log(`${lucro} - ${margem} - ${base}`);

  textMargemDefault.textContent = `Margem: ${margem.toFixed(1)}%`;
  textBaseDefault.textContent = `Base: ${base.toFixed(1)}%`;

}

function handleCustoChange(evnt) {
  let precoVenda = inputVenda.value;
  let precoCusto = inputCusto.value;
  let lucro = precoVenda - precoCusto;
  let margem = (lucro / precoVenda) * 100;
  let base = (lucro * 100) / precoCusto;

  console.log(`${lucro} - ${margem} - ${base}`);

  textMargemDefault.textContent = `Margem: ${margem.toFixed(1)}%`;
  textBaseDefault.textContent = `Base: ${base.toFixed(1)}%`;

}

inputVenda.addEventListener('change', handleVendaChange);
inputCusto.addEventListener('change', handleCustoChange);
inputRange.addEventListener('input', handleRangePrice)