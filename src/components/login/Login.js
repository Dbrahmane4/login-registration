import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = {email: email, password: password};

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)
    }
    return (
        <>
        <h1>Login Form</h1>
         <form action='' onSubmit={submitForm}>
             <div>
                 <label htmlFor='email'>Email</label>
                 <input type="text" name="email" id="email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email}></input>
             </div>
             <div>
                 <label htmlFor='password'>Password</label>
                 <input type="password" name="password" id="password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password}></input>
             </div>
             <button type='submit'>Login</button>
         </form>   
         <div>
             {
                 allEntry.map((data) => {
                     return(
                         <div className='details'>
                            <p>{data.email}</p>
                            <p>{data.password}</p>
                         </div>
                     )
                 })
             }
         </div>
        </>
    );
};

export default Login
 