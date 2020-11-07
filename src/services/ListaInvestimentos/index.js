export const ListaInvestimentosService = () => {
    return fetch('https://run.mocky.io/v3/3c3cc3a1-151c-4937-8b4c-7694b524cc87')
    .then(resp => {
       return resp.json();
    })
  }