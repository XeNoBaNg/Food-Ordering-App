"use client";

import Image from "next/image"
import Link from "next/link";
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function RegisterPage() {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [err, setErr] = useState(false)
    async function handleFormSubmit(ev) {
        ev.preventDefault()
        setCreatingUser(true)
        setErr(false)
        setUserCreated(false)
        const {ok} = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        })
        if (ok) {
            setUserCreated(true)
        } else {
            setErr(true)
        }
        setCreatingUser(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            {userCreated && ( 
                <div className="my-4 text-center">
                    User Created.<br /> Now U can <Link className="underline" href={'/login'}>Login &raquo;</Link>
                </div>
            )}

            {err && (
                <div className="my-4 text-center">
                    An Error has occurred.<br />
                    Plz Try Again Later.
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} 
                    disabled={creatingUser}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" value={password}
                    disabled={creatingUser}
                    onChange={ev => setPassword(ev.target.value)} />
                <button type="submit" disabled={creatingUser} >{creatingUser ? "Registering..." : "Register"}</button>
                <div
                    className="my-4 text-center text-gray-500"
                >
                    or login with provider
                </div>
                <button type="button" onClick={() => signIn('google', { callbackUrl: '/' })} className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt="" width={24} height={32}/>
                    Login With Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing Account? <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}