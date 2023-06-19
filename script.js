const PokemonName = document.querySelector(".pokemon__name")
const pokemonNumber = document.querySelector(".pokemon__number")
const Pokemonimage = document.querySelector(".pokemon__image")
const form = document.querySelector("form")
const inputSearch = document.querySelector(".inputSearch")
const prev = document.querySelector(".prev")
const next = document.querySelector(".Next")
let searchPokemon = 1
const fetchPokemon = async (pokemon)=>{
 
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(ApiResponse.status === 200){
        const data = await ApiResponse.json()
        return data
    }} 


const renderPoke = async (pokemon)=>{
    
    
    const data = await fetchPokemon(pokemon)
     if(data){ 
    PokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    Pokemonimage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
    searchPokemon = data.id
    inputSearch.value = ""
    } else{
        PokemonName.innerHTML = "Not found"
        pokemonNumber.innerHTML=""
        Pokemonimage.style.display = "none"
    }
}

renderPoke(searchPokemon)

form.addEventListener("submit",(evento)=>{

    evento.preventDefault();
   renderPoke(inputSearch.value)

})

prev.addEventListener("click",()=>{
 searchPokemon -= 1
 renderPoke(searchPokemon)
})

next.addEventListener("click",()=>{
    searchPokemon++
    renderPoke(searchPokemon)
})
