import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>THis is login page </h1>
            <p className='text-red-600 font-bold '>You need to login first for Login</p>
            <div className='mt-10'>
                <Link className='px-5 py-3 bg-green-500' href={"/"} >
                    Go Back To home
                </Link>
            </div>
        </div>
    )
}

export default Login