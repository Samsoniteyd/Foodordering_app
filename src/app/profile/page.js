'use client'
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
    const session = useSession();
    const [userName, setUserName] = useState('');
    const [saved, setSaved] = useState(false);
    const [isSaving, setisSaving] = useState(false);
    const {status} = session;
    console.log(session)

    useEffect(()=> {
        if (status === 'authenticated') {
           setUserName(session.data.user.name);
            }
    }, [session, status]);

   async function handleProfileInfoUpdate(ev) {
        ev.preventDefault(); 
        setSaved(false);
        setisSaving(true);
        const response = await fetch ('api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: userName})
        });
        setisSaving(false);
        if (response.ok) {
           setSaved(true);
        }
    }

    if (status === 'loading') {
        return 'loading...';
    }
    if (status === 'unauthenticated') {
        redirect('/login');
    }

    const userImage = session.data.user.image;

     
  return (
   <section className="mt-8">
    <h1 className="text-center text-primary text-primary text-4xl mb-4">
        profile

    </h1>
    

    <div className='max-w-md mx-uto'>
    {saved && (
        
    <h2 className='text-center bg-green-100 p-4 rounded-lg border border-green-300'>
        profile save
    </h2>
    )}

    {isSaving && (
        <h2 className='text-center bg-blue-100 p-4 rounded-lg border border-blue-300'>
       saving......
    </h2>
    )}
        <div className='flex gap-2 items-center'>
            <div>
                <div className='relative p-2 rounded-lg '>

            <Image className="rounded-lg w-full h-full mb-2" src={userImage} width={250} height={250} alt= {'avatar'} />
            <label >
            <input type="file" className='hidden' />
            <span className='block border border-gray-300 rounded-lg p-2 text-center cursor-pointer'>EDIT</span>
            </label>
            </div>

            </div>
        </div>
        <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input type="text" placeholder='First and Last name'
            value={userName} onChange={ev => setUserName(ev.target.value)} />
         <input type="email" disabled={true} value={session.data.user.email} />
         <button type='submit'>save</button>
        </form>

    </div>

   </section>
  )
}

export default page



