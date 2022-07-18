import React from "react";

function Form({firstName,lastName,onChangeFirstName, onchangeLastName}){
  return (
    <>
    <form>
      <input type="text" value={firstName} onChange={(event)=>onChangeFirstName(()=>{console.log(event.target.value);return event.target.value})}/>
      <input type="text" value={lastName} onChange={(event)=>onChangeFirstName(event.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Form;
