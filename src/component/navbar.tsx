import React from 'react'
import Filter from "./filter";
import {Link,useNavigate} from "react-router-dom";

import {useSelector} from 'react-redux'

const Navbar: React.FC<{}> = () => {

  const users=useSelector((state:any)=> state.users)
  console.log(users)
  

  return (
    <div>
    <header className="bg-gray-200 h-16 ">
        <nav className='flex'>
            <div className="flex ">
            <Link to="/">  <h1 className="pl-28  text-3xl font-bold my-3 ">ASHISH</h1></Link>

                <input type="search" className="mx-6 my-4  w-72 px-4 h-8 rounded-md border-hidden outline-none "  placeholder="Search"/>
                
            </div>
            <ul className="md: flex mx-52">
                    <li className="my-4  "> <Filter options={['Active','Inactive']}/> </li>
                    <li className="pl-7 my-4"> <Link to="/">Contacts</Link> </li>
                    <li className="pl-7 my-4"><Link to="/contect">Add Contacts</Link></li>
                </ul>
        </nav>
    </header>
    {users.map((user: any,index: React.Key | null | undefined)=>(
      <h1 className="pl-[10rem]" key={index}>{user.name}</h1>
    )
    )}
    
    </div>
  )
}

export default Navbar