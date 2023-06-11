import React,{useState} from 'react';


 const Filter= ({options}:{options:string[]}) => {
    const [isExpanded,setIsExpanded] =useState(false)
    

  return (
    <div>
        <button onClick={()=>setIsExpanded(!isExpanded)} className="rounded text-black px-6 py-1 bg-white  ">Filter Dropdown 
        
        </button>
        {isExpanded && 
        <div className="bg-white px-2 py-1">
            <ul>
            {options.map(option=>(
                <li 
                onClick={()=>{
                    setIsExpanded(false)
                    }}
                className="hover:bg-blue-400 pl-3 cursor-pointer " key={option}>{option}</li>
            ))}
            </ul>
        </div>
        }
    </div>
  )
}

export default Filter
