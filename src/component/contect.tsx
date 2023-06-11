import React from 'react'
import {Link} from "react-router-dom";
import Addcontect from "./addcontect";



 const contect:React.FC<{}> = () => {



  return (
    <>
    <header className="bg-gray-200 h-16 ">
        <nav className='flex'>
            <div className="flex ">
            <Link to="/">  <h1 className="pl-28  text-3xl font-bold my-3 ">ASHISH</h1></Link>
                
         </div>
            <ul className="flex  absolute right-16"> 
                    <li className="pl-7 my-4"> <Link to="/">Contacts</Link> </li>
                    <li className="pl-7 my-4"><Link to="/contect">Add Contacts</Link></li>
                </ul>
        </nav>
    </header>
    <div className="">
        <h1 className="text-3xl font-bold my-3 text-center">Contect Form</h1>

        <Addcontect/>

    </div>

    </>
  )
}

export default contect
