import React from 'react'
import { Redirect } from 'react-router-dom'

export function redirectToLogin () {
    return <Redirect to="/login" />
}