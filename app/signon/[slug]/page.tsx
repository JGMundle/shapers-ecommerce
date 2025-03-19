import React from 'react'

interface Slug {
    params: string
}

const loginsignup = ({params}: Slug) => {
  return <div>
    {/* Log In */}
    <div >
      
    </div>

    {/* Sign Up */}
    <div>
      <h1 className='text-5xl font-bold'>Sign Up to get started</h1>
      <form action="submit">
        <label htmlFor="">First name</label>
        <input type="text" placeholder='Johnathan'/>

        <label htmlFor="">Last name</label>
        <input type="text" placeholder='Ben Doestar'/>

        <label htmlFor="">Email</label>
        <input type="text" placeholder='example@email.com'/>

        <label htmlFor="">Password</label>
        <input type="text" placeholder='**********'/>
      </form>
    </div>
  </div>;
}

export default loginsignup