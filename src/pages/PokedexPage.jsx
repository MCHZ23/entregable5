

import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import PokemonCard from "../components/PokedexPage/PokemonCard"
import { useState } from "react"
import { useRef } from "react"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState ('')

  const [selectValue, setSelectValue] = useState ('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)
  
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0$limit=20'
  const [ pokemons, getAllPokemons, getAllPokemonByType ] = useFetch(url)

  useEffect(() => { 
    if (selectValue === 'allPokemons'){ 
      getAllPokemons()
    } else { 
      getAllPokemonByType(selectValue)
    }
    
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => { 
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())   
  }

  const cbFilter = pokemon => pokemon.name.includes(inputValue)



  return (
    <div>

    <div className="radius__style1L">
            <div className="radius__style2L" >
              <div className="radius__styleL3">
                <div className="radius__style4L"></div>
              </div>
            </div>
      </div>

      <div className="card__style">''</div>

      <div className="card_style2">''</div>


      <p className="pwelcome__style"><span className="welcome__style">Welcome {trainer},</span> here you can find your favorite pokemon</p>
      <form className="cardform__style" onSubmit={handleSubmit}>
        <input className="cardinput__style" placeholder="Search pokemon" ref={inputSearch} type="text" />
        <button className="cardbutton__style">Search</button>
      </form>
      <SelectType  setSelectValue={setSelectValue} />
      
      <div className="cards__container">
        
         {
           pokemons?.results.filter(cbFilter).map(pokemon => (
             <PokemonCard
               key={pokemon.url}
               url={pokemon.url}
             />
           ))
         }
      </div> 
    </div>
  )
}

export default PokedexPage