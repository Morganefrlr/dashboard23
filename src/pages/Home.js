import { useState } from "react";
import Calculator from "../components/calculator/Calculator";
import Calendar from "../components/calendar/Calendar";
import Menu from "../components/menu/Menu";
import Musique from "../components/musique/Musique";
import Time from "../components/time/Time";
import Topbar from "../components/topbar/Topbar";
import Weather from "../components/weather/Weather";
import Quiz from "../components/quiz/Quiz";
import Tik from "../components/tiktaktoe/Tik";
import Memory from "../components/memory/Memory";
import Todo from "../components/todo/Todo";
import Start from './Start'

const Home = () => {
    const [user, setUser] = useState('null')
    const [openApp, setOpenApp] = useState('todo')

    return (
        <>
        {user === null ? 
            (
                <Start user={user} setUser={setUser}/>
            ) 

            :   
            (
                <div className="mainContainer" style={{display : 'flex'}}>
                    <div className="mainContainer_left" style={{flex : 1}}>
                        <Menu openApp={openApp} setOpenApp={setOpenApp}/>
                        <Musique />

                        <span className="copyright">©Copyright images, Freepik.com</span>
                    </div>
                    <div className="mainContainer_center"  style={{flex : 3}}>
                        <div className="boxTop">
                            <Topbar user={user}/>
                            <Time />
                        </div>
                        {openApp === 'quiz' && 
                        <Quiz user={user}/>
                        }
                        {openApp === "tik" && 
                        <Tik />
                        }
                        {openApp === 'memory' &&
                            <Memory />
                        }
                        {openApp === 'todo' &&
                            <Todo />
                        }
                    
                    </div>
                    <div className="mainContainer_right" style={{flex : 1}}>
                        <Weather />
                        <Calendar />
                        <Calculator />
                        
                    </div>
                    
                </div>
            )}</>
    );
};

export default Home;