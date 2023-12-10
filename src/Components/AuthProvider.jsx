"use client"

import { isAuthenticated } from "@/utils/Authentication"
import { redirect } from "next/navigation"
import { useLayoutEffect } from "react"


const AuthProvider = ({ children }) => {
    useLayoutEffect(() => {
        if (!isAuthenticated) {
            redirect("/login")
        }
    }, [])

    return (
        <div>
            <h1>This is from auth</h1>
            {children}
        </div>
    )
}

export default AuthProvider