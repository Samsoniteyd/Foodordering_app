"use client"
import { signIn } from 'next-auth/react';
import Image from 'next/image'
import { useState } from 'react';

const page = () => {
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');
  const[username, setUsername]= useState(''); 
const [loginInprogress, setLoginInProgress] = useState(false);


async function handleFormSubmit(ev) {
  ev.preventDefault();
  setLoginInProgress(true);

  await signIn('credentials', {username, email, password, callbackUrl: '/'})
  setLoginInProgress(false);

}

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit} >
      <input type="text"
             value={username} 
             name='username'
             disabled= {loginInprogress}
             placeholder='username'
            onChange={ev => setUsername(ev.target.value)} />
            <input type="email" 
             value={email} 
             name='email'
             placeholder='email'
             disabled= {loginInprogress}
            onChange={ev => setEmail(ev.target.value)} />
            <input type="password"
             value={password} 
             name='password'            
             placeholder='password'
             disabled= {loginInprogress}
            onChange={ev => setPassword(ev.target.value)} />
            <button type='submit' disabled= {loginInprogress}>login</button>
            <div className='my-4 text-center text-gray-500'>
               or login with provider
            </div>
            <div>
                <button  onClick={() => signIn('google', {callbackUrl:'/'}) }
                className='flex gap-4 justify-center'>
                    <Image src={'/google.png'} alt={''} width={32} height={32}  />
                    Login with google</button>
             </div>

      </form>

    </section>
  )
}

export default page