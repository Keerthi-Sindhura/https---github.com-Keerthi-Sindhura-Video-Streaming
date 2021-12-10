import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                    src="https://images.unsplash.com/photo-1563053581-1a7a69f8f656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmxvZ2dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  
                    alt="Vlogger"
                    name="Varun"
                    path="/varun"
                    label="Vlogger"

                />
                <CardItem
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Model"
                name="Athena"
                path="/athena"
                label="Model"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="Photographer"
                name="Adam"
                path="adam"
                label="Photographer"
                />
                <CardItem
                    src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Singer"
                    name="Rochele"
                    path="/rochele"
                    label="Singer"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                    src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="dancer"
                    name="Eric"
                    path="/eric"
                    label="Dancer"
                />
                <CardItem 
                    src="https://images.unsplash.com/photo-1619451683243-b629e920805d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZyUyMGxvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Dog Lover"
                    name="Monica"
                    path="/monica"
                    label="Dog lover"
                />
            </ul> 
            </div>
        </div>
    )
}

export default Cards
