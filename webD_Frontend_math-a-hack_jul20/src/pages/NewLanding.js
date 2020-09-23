import React from 'react'
import { LoadingScreen } from '../util/preLoad'
import Landing from './LandingPage'

export default function NewLanding(props) {
    const [ loading, setLoading ] = React.useState(true)
    React.useEffect( () => {
        setTimeout( () => {
            setLoading(false)
        } ,3200)
    } ,[])
    return (
        <>
            { loading ? LoadingScreen() : <Landing {...props} /> }
        </>
    )
}