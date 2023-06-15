import { useState , useEffect} from "react";
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WindPowerIcon from '@mui/icons-material/WindPower';
import soleil from '../../assets/weather/ensoleille(1)-min.png'
import nuage from '../../assets/weather/temps-nuageux-min.png'
import neige from '../../assets/weather/neigeux(1)-min.png'
import brouillard from '../../assets/weather/venteux-min.png'
import pluis from '../../assets/weather/pluvieux-min.png'
import bruine from '../../assets/weather/pluvieux(1)-min.png'



const Weather = () => {
    const APIKEY = '7bbfe55193372c9c417ce61c6443972f'
    const [city, setCity] = useState('Paris')
    const [image, setImage] = useState(false)
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric&lang=fr`
    const [villeErreur, setVilleErreur] = useState(null)
    
    const [weather, setWeather] = useState(false)
 /**/
    useEffect (() =>{
        const fetchWeather = async () =>{
            await axios.get(URL).then(res => {   
                setWeather(res.data)
                setImage(res.data.weather[0].main)
                

            })
        }
        fetchWeather()
        // eslint-disable-next-line
    }, []) 

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.get(URL).then((res) =>{
                setVilleErreur(null)
                setWeather(res.data)
                setImage(res.data.weather[0].main)
            })
        }
        catch(err){
            setVilleErreur(err.response.data.message)
        }
    }

    return (
        <div className="mainWeather">
            <div className="input">
                <input  type="text" placeholder="Rechercher" value={city} onChange={(e) => setCity(e.target.value)}/>
                <button type="submit"><SearchIcon  className="icon" onClick={(e) => handleClick(e)}/></button>
            </div>
            <span>En ce moment à</span>
            {weather === false && 
               <span>En cours de chargement...</span>
            }
            
            {villeErreur === null && weather !== false && 
                <>
                    <h1>{weather && weather.name}</h1>
                    {image === 'Clear' && 
                         <img src={soleil} alt="" />
                    }
                    {image === 'Clouds' && 
                         <img src={nuage} alt="" />
                    }
                    {image === 'Snow' && 
                         <img src={neige} alt="" />
                    }
                    {((image === 'Mist') || (image === 'Haze')) && 
                         <img src={brouillard} alt="" />
                    }
                    {image === 'Rain' && 
                         <img src={pluis} alt="" />
                    }
                    {image === 'Drizzle' && 
                         <img src={bruine} alt="" />
                    }
                    
                    <span>{weather.weather[0].description}</span>
                    <div className="detailsWeather">
                        <div className="detailsWeather_box">
                            <ThermostatIcon className="icon" />
                            <span>{Math.round(weather.main.temp)}°C</span>
                        </div>
                        <hr />
                        <div className="detailsWeather_box">
                            <WindPowerIcon className="icon"/>
                            <span>{Math.round(weather.wind.speed)} km/h</span>
                        </div>
                    </div>
                
                </>
            
            }
            {villeErreur === "city not found" &&
                <span>Ville non trouvée</span>
            }
            

        </div>
    );
};

export default Weather;
