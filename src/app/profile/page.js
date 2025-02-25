'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function ProfilePage () {

    const session = useSession()
    const [userName,setUserName] = useState(session.data?.user?.name || '')
    const {status} = session

    async function handleProfileInfoUpdate (ev) {
        ev.preventDefault()
        const response = await fetch('/api/profile', {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name : userName})
        })

    }
    
    if (status === 'loading') {
        return "Loading...."
    }

    if(status === 'unauthenticated') {
        return redirect('/login')
    }
    const userImage = session.data.user.image

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
            <div className="max-w-md mx-auto">
                <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-lg relative">
                        <img className="rounded-lg w-full h-full mb-1" src={userImage} alt="userImage" width={280} height={280} />
                        <button type="button">Edit</button>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input type="text" placeholder="First and Last Name"
                            value={userName} onChange={ev => {setUserName(ev.target.value)}}
                        />
                        <input type="email" disabled={true} value={session.data.user.email} />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    )
}