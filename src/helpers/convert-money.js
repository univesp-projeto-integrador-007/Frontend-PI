const ConvertMoney = (value) => {
  if(typeof value === 'string'){
    return Number.parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
  }
  return (value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
}

export default ConvertMoney