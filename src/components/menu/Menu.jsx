import logo from '../../assets/logo.png'
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

const Menu = ({openApp, setOpenApp}) => {

    const [openGame, setOpenGame] = useState(false)
    const [openProductive, setOpenProductive] = useState(false)
    
    return (
        <div className="mainMenu">
            <div className="menuLogo">
                <img src={logo} alt="" />
                <span>DASHBOARD</span>
            </div>
            <div className="menuList">
                <div className="menuList_container">
                    <div className="title">
                        <span>Productif</span>
                        {openProductive ? (<ArrowDown className='icon' onClick={() => setOpenProductive(false)}/>) : (<ArrowUp className='icon' onClick={() => setOpenProductive(true)}/>)}
                        
                    </div>
                    <div className={openProductive ? 'list opened' : 'list'}>
                        <span onClick={() => setOpenApp("todo")} className={openApp === "todo" ? 'valid' : ''}>To Do List</span>
                    </div>
                </div>
                <div className="menuList_container">
                    <div className="title">
                        <span>Jeux</span>
                        {openGame ? (<ArrowDown className='icon' onClick={() => setOpenGame(false)}/>) : (<ArrowUp className='icon' onClick={() => setOpenGame(true)}/>)}
                    </div>
                    <div className={openGame ? 'list opened' : 'list'}>
                        <span onClick={() => setOpenApp("tik")} className={openApp === "tik" ? 'valid' : ''}>Tik Tak Toe</span>
                        <span onClick={() => setOpenApp("quiz")} className={openApp === 'quiz' ? 'valid' : ''}>Quiz</span>
                        <span onClick={() => setOpenApp("memory")} className={openApp === 'memory' ? 'valid' : ''}>Memory</span>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Menu;