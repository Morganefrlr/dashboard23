import logo from '../assets/logo.png'
import {  useState } from "react";


const Start = ({user,setUser}) => {
    const [name, setName] = useState()

    return (
        <div className="mainStart">
            <img src={logo} alt="" />
            <h1>Bienvenue sur Dashboard </h1>
            <span>Quel est votre prénom s'il vous plait?</span>
            <input type="text" placeholder="Veuillez écrire votre prénom" onChange={(e) => setName(e.target.value)}/>
            <button type='submit' onClick={() => setUser(name)}>Valider</button>
        </div>
    );
};

export default Start;