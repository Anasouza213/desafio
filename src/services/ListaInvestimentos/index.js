export const ListaInvestimentosService = () => {
    return fetch('http://www.mocky.io/v2/5e76797e2f0000f057986099')
    .then(resp => {
       return resp.json();
    })
  }