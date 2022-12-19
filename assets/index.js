document.getElementById('card').style.setProperty('display','none','important')

function procurar(){
    document.getElementById('card').style.setProperty('display','block','important')
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    
    console.log(finalURL)
    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data[0].capital)
            console.log(data[0].region)
            console.log(data[0].population)

            let flag = document.getElementById('flag')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let continente = document.getElementById('continente')
            let populacao = document.getElementById('populacao')

            nome.innerHTML = data[0].name.common
            capital.innerHTML = data[0].capital
            continente.innerHTML = data[0].region
            populacao.innerHTML = data[0].population
            flag.src = data[0].flags.svg
        })
} 