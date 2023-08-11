import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"


const PokeIdPage = () => {
  const { id } = useParams()

  const url = `https://pokeApi.co/api/v2/pokemon/${id}`
  const [ pokemon, getSinglePokemon ] = useFetch(url)

  useEffect(() => { 
    getSinglePokemon()
  }, [])



  return (
    <article>
      {pokemon ? ( 
        <>


        <header className="upper__style">''
          <dir className="lower__style">''</dir>
        </header>

        <div className="pokebola__style">
          <div className="radius31__style3">
           <div className="radius32__style3" >
             <div className="radius33__style3">
             </div>
           </div>
          </div>
        </div>

        <div className="pokédex1__style">Pokédex</div>

        <div className="maincont__style">
        
           

        
           
           <div className="container__style">

           

            

           
             <div className="div0__style">''</div>
             <div   className="background__style">
              <div>''</div>
             </div>


             
             <img className="imgpokemon__style" src={ pokemon.   sprites.other  ['official-artwork'].front_default}    alt="" />
           

           

           <p className="id__style" ># {pokemon.id}</p>
           <span className="span__style"><hr className="hr__style" />  <div>
            <div ></div><h2 className="name__style">{pokemon.name}</h2></div>  <hr className="hr2__style" /></span>

           <div className="height__style">
            
             <p>Height</p>
             <div> {pokemon.height} </div>
             
             <div className="weight__style">
             <p>Weight</p>
             <div> {pokemon.weight} </div>
             </div>
           </div>

           <div className="type__style">
           <div className="gap2__style">Type
           <p className="gap1__style"> { pokemon.types.map((type) => type.type.name).join(" ")}</p></div>
           </div>
           <div className="ability__style">
           <div  className="gap__style">Abilities
           <p>{pokemon.abilities.map((ability) => ability.ability.name).  join(", ") }</p></div> 


           </div>

           <div className="letter__style">
             <h2>Stats</h2>
           </div>


           <div className="stat__container">
           <div className="othert__style">

            <div className="stat__bar">
              <div className="stat__label">HP:</div>
              <progress
                className="stat__progress"
                value={pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat}
                max="255"
              ></progress>
              <div className="stat__value">{pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat}</div>
            </div>

            </div>

            <div className="stat2__bar">
              <div className="stat2__label">Attack:</div>
              <progress
                className="stat2__progress"
                value={pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat}
                max="255"
              ></progress>
              <div className="stat2__value">{pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat}</div>
            </div>


            <div className="stat3__bar">
              <div className="stat3__label">Defense:</div>
                <progress
                   className="stat3__progress"
                   value={pokemon.stats.find((stat) => stat.stat.   name === "defense").base_stat}
                   max="255"
                ></progress>
              <div className="stat3__value">{pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat}
              </div>
            </div>

             
            
            <div className="stat4__bar">
              <div className="stat4__label">Speed:</div>
                <progress
                   className="stat4__progress"
                   value={pokemon.stats.find((stat) => stat.stat.   name === "speed").base_stat}
                   max="255"
                ></progress>
              <div className="stat4__value">{pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat}
              </div>
              </div>


              <div className="movement__style">

           <h3 className="h3__style">Movements</h3>
             
        
           <ul className="ul__style">
             {pokemon.moves.slice(0, 10).map((move) => (
               <li className="list__style" key={move.move.name}>
                 {move.move.name}</li>
             ))}
           </ul>

           </div>
            
            
           </div>
           
           </div>


           
        </div>
        </>
        ) : (
          <p>Loading...</p>

        )}
      
    </article>
  )
}

export default PokeIdPage