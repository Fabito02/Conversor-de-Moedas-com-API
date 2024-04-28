function result() {
    const appId = 'c4a459a399e34cd8b9c36f30921d5cb8';
    let tipoMoeda = document.getElementById('tipoMoeda').value;
    let valSeraConvert = parseFloat(document.getElementById('valSeraConvert').value);
    let moedaConversao = document.getElementById('moedaConversao').value;

    fetch(`https://open.er-api.com/v6/latest/${tipoMoeda}?app_id=${appId}`)
    .then(response => response.json())
    .then(data => {
        let codigoMoeda = data.rates[tipoMoeda];
        let coinConvert = data.rates[moedaConversao];
        let valConvertido = (valSeraConvert / codigoMoeda * coinConvert).toFixed(2);
        document.getElementById("result").innerHTML = `O resultado da conversão é: ${valConvertido}`;
        console.log(`O resultado da conversão é: ${valConvertido}`);
    })
    .catch(error => console.error('Erro ao buscar as taxas de câmbio:', error));
}
