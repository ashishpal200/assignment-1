import React from 'react'
import Select from 'react-select';
const select = () => {
    const options=[
        {value:"India",label:"India"},
        {value:"Australia",label:"Australia"},
        {value:"United States",label:"United States"},
        {value:"Canada",label:"Canada"},
        {value:"France",label:"France"}
    ]
  return (
    <>
<label className="sr-only">Underline select</label>
<select id="underline_select" className=" pl-2 block py-2.5 px-0  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer w-[22rem]">
    <option  >Choose a country</option>
    <option value="US">India</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
</select>
</>

  )
}

export default select