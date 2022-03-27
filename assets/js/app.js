window.addEventListener('load',()=>{

    let btn = document.getElementById('btn');
    let name = document.getElementById('nameCountry')
    let capital = document.getElementById('capitalCountry')
    let continent= document.getElementById('continentCountry')
    let population = document.getElementById('populationCountry')
    let flags = document.getElementById('flagsCountry')
    let historyTitle = document.getElementById('history-name')
    let history = document.getElementById('history')
    let historyAll = document.getElementById('history-all')
    let countries = document.getElementById('countries')
    

    btn.addEventListener('click',()=>{
        let inputValue = document.getElementById('paises').value

        let url = `https://restcountries.com/v3.1/name/${inputValue}`
        
        usaFetch(url)

        function usaFetch (url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {

                
                if (data.message == 'Page Not Found') {
                    swal({
                        title: "Oops..",
                        text: "Enter a country",
                        icon: "warning",
                      })
                }
                if (data.message == 'Not Found') {
                    swal({
                        title: "Oops..",
                        text: "Country not found",
                        icon: "error",
                      })
                } else {

                    
                    let nameCountry = data[0].name.common

                    name.innerHTML = `<span class="fw-bold fs-4">${nameCountry}</span>`;
  
                    let capitalCountry = data[0].capital
  
                    capital.innerHTML = `<span class="fw-bold">Capital: </span>${capitalCountry}`;
  
                    let continentCountry = data[0].continents[0]
  
                    continent.innerHTML = `<span class="fw-bold">Region: </span>${continentCountry}`;
  
                    let populationCountry = data[0].population
  
                    population.innerHTML = `<span class="fw-bold">Population: </span>${populationCountry}`;

                   flags.src = data[0].flags.png

                   history.innerHTML += `<span class="d-flex flex-column">${nameCountry}</span>`

                   historyTitle.innerHTML = `<span class="text-center fw-bold pt-3">History: </span>`

                   historyTitle.classList.add('fw-bold','pt-3')

                   historyAll.classList.add('mx-auto','shadow-lg','mt-4','mb-4','rounded', 'd-flex', 'flex-column','justify-content-center')

                   countries.classList.add('mx-auto','shadow-lg','rounded','d-flex','flex-column','justify-content-center','pt-2')

                }
                    
                })


                .catch(function error(e) {
                console.log('Error' + e)
                })
        }

    
    })


})