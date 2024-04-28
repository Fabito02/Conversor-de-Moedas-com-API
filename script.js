function result() {
    const appId = 'c4a459a399e34cd8b9c36f30921d5cb8'
    let tipoMoeda = document.getElementById('tipoMoeda').value
    let valSeraConvert = parseFloat(document.getElementById('valSeraConvert').value)
    let moedaConversao = document.getElementById('moedaConversao').value
    if (tipoMoeda.trim() === '' || isNaN(valSeraConvert) || moedaConversao.trim() === '') {
        document.getElementById("result").innerHTML = ('Insira dados válidos em todos os campos!')
    }

    fetch(`https://open.er-api.com/v6/latest/${tipoMoeda}?app_id=${appId}`)
    .then(response => response.json())
    .then(data => {
        let codigoMoeda = data.rates[tipoMoeda]
        let coinConvert = data.rates[moedaConversao]
        let valConvertido = (valSeraConvert / codigoMoeda * coinConvert).toFixed(2)
        document.getElementById("result").innerHTML = `O resultado da conversão é: ${valConvertido}${moedaConversao}`
        console.log(`O resultado da conversão é: ${valConvertido}`)
        if (isNaN(valConvertido)) {
        document.getElementById("result").innerHTML = 'Erro ao buscar as taxas de câmbio! <br><br><b>Verifique se inseriu os dados corretamente.</b>'
        }
    })
    .catch(error => {
        console.error('Erro ao buscar as taxas de câmbio:', error)})
}
