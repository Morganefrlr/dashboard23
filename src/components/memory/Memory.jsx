import { useState } from "react";
import store from '../../assets/memory/cafe(1)-min.png'
import cafe from '../../assets/memory/cafe.png'
import glace from '../../assets/memory/creme-glacee-min.png'
import sugar from '../../assets/memory/du-sucre-min.png'
import grain from '../../assets/memory/haricot-min.png'
import lait from '../../assets/memory/lait-min.png'
import machine from '../../assets/memory/machine-a-cafe-min.png'
import moulin from '../../assets/memory/moulin-a-cafe-min.png'

const Memory = () => {

    const [prev, setPrev] = useState(-1)
    const [items, setItems] = useState([
        {id:1, img:store, stat:""},
        {id:1, img:store, stat:""},
        {id:2, img:cafe, stat:""},
        {id:2, img:cafe, stat:""},
        {id:3, img:glace, stat:""},
        {id:3, img:glace, stat:""},
        {id:4, img:sugar, stat:""},
        {id:4, img:sugar, stat:""},
        {id:5, img:grain, stat:""},
        {id:5, img:grain, stat:""},
        {id:6, img:lait, stat:""},
        {id:6, img:lait, stat:""},
        {id:7, img:machine, stat:""},
        {id:7, img:machine, stat:""},
        {id:8, img:moulin, stat:""},
        {id:8, img:moulin, stat:""},
    ].sort(() => Math.random() - 0.5))

    const check = (current) =>{
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    const handleClick = (index) => {   
        
        if(items[index].stat !== ''){
            alert('Déjà cliquée')
            return;
        }
        else if(prev === -1){
            for(let i = 0; i< items.length; i++){
                if(items[i].stat === 'active'){
                    items[i].stat = ""
                    items[index].stat = "active"
                    setItems([...items])
                    setPrev(index)
                }else{
                    items[index].stat = "active"
                    setItems([...items])
                    setPrev(index)
                }
            }
            
        }else{
            check(index)
        }
    }

    const className = (item) =>{
        if(item.stat){
            return `card ${item.stat}`
        }
        else return 'card'
    }


    return (
        <div className="mainMemory">
            <h1>Memory App</h1>
            <div className="container">
                {items.map((item,index) => 
                    <div className={className(item)} key={index}  onClick={() => handleClick(index)}>
                        <h1>?</h1>
                        <img src={item.img} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Memory;