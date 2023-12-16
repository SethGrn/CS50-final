import React from "react"
import { useLocation } from "react-router-dom"

function NotFound () {
    const { pathname } = useLocation()
    return <h1>{`Path ${pathname} does not exist`}</h1>
}

export default NotFound