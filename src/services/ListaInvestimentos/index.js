export const ListaInvestimentosService = () => {
    return fetch('https://run.mocky.io/v3/3c3cc3a1-151c-4937-8b4c-7694b524cc87')
    .then(resp => {
       return resp.json();
    })
  }
// import axios from 'axios';
// export const ListaInvestimentosService = () => {
// axios({
//    url: 'https://run.mocky.io/v3/3c3cc3a1-151c-4937-8b4c-7694b524cc87',
//    method: 'get',
//    data: {
//      query: `
//      query allPosts {
//        posts(listType: "all") {
//          text
//        }
//       }
//      `,
//    }
//  }).then(result => {
//    console.log(result.data);
//     return result.data;
   

//  }).catch(function (error) {
//    console.log(error);
//    console.log(error.request._response);
//  })
// }