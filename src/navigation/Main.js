import React from 'react'
import { useSelector } from 'react-redux'
import { AuthStack, HomeDrawer } from '.'

const Main = () => {
    const {isSignedIn} = useSelector((state) => state.authReducer)
    return <>{isSignedIn ? <HomeDrawer/> : <AuthStack/>}</>
}


export default Main



