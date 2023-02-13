
let Data = []

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(response => response.json())
.then(data => Data = data )

let div = document.createElement("div")
document.body.append(div)
div.classList.add("parent")

let input = document.createElement("input")
document.body.append(input)
input.classList.add("searsh")
input.setAttribute("placeholder","City or state")
input.addEventListener("input",creat)

function creat() {
    let chiled = document.createElement("div")
    document.querySelector(".parent").append(chiled)
    chiled.classList.add("chiled")
    let city = document.createElement("span")
    chiled.append(city)
    let population = document.createElement("span")
    chiled.append(population)
    let state = document.createElement("span")
    chiled.append(state)

    
}
function search (e) {
    if (data.includes(e.target)) {
        console.log(2);
    }
}

// for (let s in str) {console.log(s);}
// console.log(str.city);
function creat(e) {
    document.querySelector(".parent").innerHTML=""
    for (let str of Data) {
        if (e.target.value=="") {
            document.querySelector(".parent").innerHTML=""
        }

        else if (str.state.includes(e.target.value)|| str.city.includes(e.target.value) ) {
        let chiled = document.createElement("div")
        document.querySelector(".parent").append(chiled)
        chiled.classList.add("chiled")
        let city = document.createElement("span")
        chiled.append(city)
        city.innerHTML = "city /   "+str.city
        let population = document.createElement("span")
        chiled.append(population)
        population.innerHTML= "population/" +str.population
        let state = document.createElement("span")
        chiled.append(state)
        state.innerHTML="state/ "+ str.state
    }
    }
}
