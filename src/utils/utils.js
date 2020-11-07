const Utils = {

    formataValor: function (n) {
        return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
        },

    numeros:  function (string) 
        {
                let numsStr = string.replace(/[^0-9]/g,'');
                return parseInt(numsStr);
        }

}

export default Utils;