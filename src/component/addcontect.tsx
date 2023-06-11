import React, {  useState } from "react";
import Select from "./select";
const Addcontect:React.FC<{}> = () => {
  const [name,setName]=useState()
  const [mobileno,setMobileno]=useState()
  const [email,setEmail]=useState()
  const [status,setstatus]=useState()
  const [city,setcity]=useState()
  const [country,setcountry]=useState()

  const [selectedDrink, setSelectedDrink] = useState<String>();
  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };

  
  return (
    <div className="ml-[30rem]">
        <form className="w-full h-max sm:w-[400px] p-5 rounded-sm  " action="">
        <div>
            <input type="text" name='name' placeholder="Full Name" className="p-2  bg-transparent bg-transparent border-b-2 border-black outline-none w-[22rem]"/>
            <input type="text" placeholder="Mobile No" id="mobile_code" className="p-2  bg-transparent bg-transparent border-b-2 border-black outline-none w-[22rem]" />
            <input type="text" placeholder="Email" className="p-2  bg-transparent bg-transparent border-b-2 border-black outline-none w-[22rem]" />
            <p className="space-x-3 pl-2">
            <input type="radio" name="Active" value="active" id="active" onChange={radioHandler} className="mt-4 pl-3 " />&nbsp;Active
            <input type="radio" name="inactive" value="active" id="active" onChange={radioHandler} className=" " />&nbsp;Inactive
            </p>
            <hr className="bg-black h-px border-0 w-[22rem] mt-2"/>
            <input type="text" placeholder="City" className="p-2  bg-transparent bg-transparent border-b-2 border-black outline-none w-[22rem]" />
            <Select/>
<div className=" ml-32 mt-14 space-x-1">
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded w-[7rem]">
  Cancle
</button>
<button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded w-[7rem]">
  Save
</button>

</div>
        </div>
        </form>
    </div>
    

  )
}

export default Addcontect ;