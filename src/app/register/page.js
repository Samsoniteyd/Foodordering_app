"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'





const page = () => {
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[username, setUsername]= useState('');
    const[creatingUser, setCreatingUser]= useState(false);
    const[userCreated, setUserCreated]= useState(false);
    const[error, setError]= useState(false);

async function handleFormSubmit(ev){
        ev.preventDefault();
        setCreatingUser(false);
            setUserCreated(true);
            setError(false);
        
            await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({email, password, username}),
                headers: {'Content-Type': 'application/json'},   
            });
            
            if (response.ok) {
                setUserCreated(true);
              }
              else {
                setError(true);
              }
              setCreatingUser(false);
        
    }
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>
            Register
        </h1>

        {userCreated && (
            <div className='my-4  text-center'>
                user created. <br />
                 now you can <Link className='underline' href={'/login '}> login &raquo;</Link>
            </div>
        )}
        {error && (
            <div className='my-4  text-center text-red-500'>
                error creating user. <br />
                please try again.
            </div>  
            
                )}

        <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
            <input type="text"
             value={username} 
             disabled= {creatingUser}
             placeholder='username'
            onChange={ev => setUsername(ev.target.value)} />
            <input type="email" 
             value={email} 
             placeholder='email'
             disabled= {creatingUser}
            onChange={ev => setEmail(ev.target.value)} />
            <input type="password"
             value={password} 
             placeholder='password'
             disabled= {creatingUser}
            onChange={ev => setPassword(ev.target.value)} />
            <button type='submit' disabled= {creatingUser}>Register</button>
            <div className='my-4 text-center text-gray-500'>
               or login with provider
            </div>
            <div>
                <button  type='button'  onClick={() => signIn('google', {callbackUrl:'/'})}
                 className='flex gap-4 justify-center'>
                    <Image src={'/google.png'} alt={''} width={32} height={32}  />
                    Login with google</button>
            <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
             </div>
            </div>
        </form>
    </section>
  )
}

export default page