import React,{useState} from "react";
import DisplayLiveFormData from "./DisplayLiveFormData";
import Form from "./Form";

function ParentComponent(){

const [firstName, setFirstName] = useState("John");
const [lastName, setLastName] = useState("Henry");
    

return (
    <div>
    <Form firstName={firstName} lastName={lastName} onChangeFirstName={setFirstName} onchangeLastName={setLastName}/>{/*You can call the setter function directly instead of coming up with another function */}
    <DisplayLiveFormData firstName={firstName} lastname={lastName}/>
    </div>
)
}

export default ParentComponent;