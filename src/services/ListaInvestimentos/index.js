import api from '../api'

// class ListaInvestimentosService {
//     getInvestimentos = async () => {      
//     let data;
//     await api.get('/v2/5e76797e2f0000f057986099')
//         .then(response => {
//             data = response.data;
//         }).catch(error => {
//             console.log(error)
//         })
//         return data;       
//     }

// }


// export const listaInvestimentosService = new ListaInvestimentosService()


export const ListaInvestimentosService = () => {
    return fetch('http://www.mocky.io/v2/5e76797e2f0000f057986099')
    .then(resp => {
       return resp.json();
    })
  }