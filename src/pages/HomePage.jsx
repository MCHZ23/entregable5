import { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"


const HomePage = () => {

    //const trainer = useSelector(reducer => reducer.trainer)

    //console.log(trainer)

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit= e => { 
      e.preventDefault()
      dispatch(setTrainerG(inputTrainer.current.value.trim()))
      navigate('/pokedex')
    }

  return (
    <div className="main__leaf">
        <h1 className="h1__style">
          Pokédex</h1>
        <h2 className="h2__style">¡Hi trainer!</h2>
        <p className="p__style">To start the app, give me your trainer name</p>
        <form className="button__style" onSubmit={handleSubmit}>
           <input  className="input__style" placeholder="Type your name" ref={inputTrainer} type="te  xt" />
           <button className="button2__style">Gotta catch'em all!</button>
           <div className="radius__style">
            <div className="radius__style2" >
              <div className="radius__style3">
                <div className="radius__style4"></div>
              </div>
            </div>
           </div>
           <div className="div__style">''</div>
           <div className="div__style2">''</div>
           
        </form>
    </div>
  )
}

export default HomePage