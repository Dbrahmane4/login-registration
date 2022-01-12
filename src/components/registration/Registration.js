import React, { useState } from 'react'

const Registration = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);
    
    const submitAction = (e) => {
        e.preventDefault();
        const newEntry = {fname: fname, lname: lname, email: email, city: city, password: password};

        setAllEntry([...allEntry, newEntry]);
        // console.log(allEntry);
    }
    return (
        <>
          <h1>Registration form</h1>  
          <form action='' onSubmit={submitAction}>
          <div>
            <label htmlFor='firstname'>First Name</label>
            <input type="text" name="fname" id="fname" autoComplete='off' onChange={(e)=> setFname(e.target.value)} value={fname} ></input>
            </div>
            <div>
            <label htmlFor='lastname'>Last name</label>
            <input type="lastname" name="lastname" id="lastname"  autoComplete='off' onChange={(e)=> setLname(e.target.value)} value={lname}></input>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" autoComplete='off' onChange={(e)=> setEmail(e.target.value)} value={email}></input>
        </div><div>
            <label htmlFor='city'>City</label>
            <input type="city" name="city" id="city" autoComplete='off' onChange={(e)=> setCity(e.target.value)} value={city}></input>
        </div><div>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password" autoComplete='off' onChange={(e)=> setPassword(e.target.value)} value={password}></input>
        </div>
             <button type='submit'>Login</button>
          </form>
          <div>
              {
                  allEntry.map((data) => {
                      return (
                          <div className='details'>
                            <p>{data.fname}</p>
                            <p>{data.lname}</p>
                            <p>{data.email}</p>
                            <p>{data.city}</p>
                            <p>{data.password}</p>
                          </div>
                      )
                  })
              }
          </div>
        </>
    )
}

export default Registration
