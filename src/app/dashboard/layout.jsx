import AuthProvider from '@/Components/AuthProvider'
import React from 'react'

const layout = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default layout