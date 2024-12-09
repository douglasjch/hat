"use client"
import Label from './label';
function Form1() {
  return (
    
    <form className="flex flex-col">
      <Label name="Name"/>
      <input className="p-4 shadow-inner outline-none ring-1 w-72 " type="text" name="" id="" placeholder="Enter your Name" />
      <Label name="Email"/>
      <input className="p-4 shadow-inner outline-none ring-1 w-72" type="email" name="" id="" placeholder="Enter your email" />
      <Label name="Phone"/>
      <input className="p-4 shadow-inner outline-none ring-1 w-72" type="number" name="" id="" placeholder="Enter your Phone Number"/>
      <Label name="Message"/>
      <textarea className="flex" name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
    </form>
    
  );
}

export default Form1;