'use client';
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function LoginPage () {


    const router = useRouter()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInProgress, setLoginInProgress] = useState(false)
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);

        try {
            const res = await signIn('credentials', { 
                redirect: false,
                email, 
                password 
            });

            if (res?.error) {
                console.log("Login failed:", res.error)
            } else {
                console.log("Login successful!")
                router.push('/')
            }
        } catch (error) {
            console.log("Login error:", error)
        } finally {
            setLoginInProgress(false)
        }
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} 
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)} />
                <button type="submit" disabled={loginInProgress} >{loginInProgress ? "Logging in..." : "Login"}</button>
                <div
                    className="my-4 text-center text-gray-500"
                >
                    or login with provider
                </div>
                <button type="button" onClick={() => signIn('google', { callbackUrl: '/' })} className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt="" width={24} height={32} style={{ height: "auto", width: "auto" }} />
                    Login With Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    New To Nigginos? <Link className="underline" href={'/register'}>Register Here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}