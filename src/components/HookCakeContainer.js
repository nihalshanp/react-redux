import React from 'react'
import {useSelector} from 'react-redux'

const HookCakeContainer = () => {
    const numOfCake = useSelector(state => state.numOfCake)
    return (
        <div>
            <h2>Num Of Cake - {numOfCake} </h2>
            <button>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
