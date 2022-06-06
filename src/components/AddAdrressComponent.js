import { useState } from "react";

const AddAddressComponent = () => {
    let formfields = [
        {
            name: "address",
            type: "textarea"
        },
        {
            name: "name",
            type: "text"
        },
        {
            name: "city",
            type: "text"
        },
        {
            name: "state",
            type: "select",
            options: ["Punjab","Haryana","Himachal","Goa"]
        },
        {
            name: "number",
            type: "number"
        },
        {
            name: "pincode",
            type: "number"
        }
    ]
    const [formdata, setFormdata] = useState({
        address: "",
        name: "",
        city: "",
        state: "",
        number: "",
        pincode: ""
    })
    let add_address = (e)=>{
        e.preventDefault();
        console.log("address = ",formdata);
    }
    return ( 
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-11 col-md-8">
        <form >
            {
            formfields.map(field=>{
                if(field.type=="textarea"){
                    return (
                <div className="mb-3"  key={field.name}>
                    <label  className="form-label">{field.name}:-</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{formdata[field.name] = e.target.value ; 
                        setFormdata({...formdata})
                    }}
                    value = {formdata[field.name]}></textarea>
                </div>
                
                )
                }
                else if(field.type=="select"){
                    return (
                        <select  key={field.name}className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                            onChange={(e)=>{
                                formdata[field.name] = e.target.value ; 
                                setFormdata({...formdata})
                            }}
                            value = {formdata[field.name]}
                        >
                            {
                                field.options.map(option=>{
                                    return (
                                        <option key={option} value={option}>{option}</option>
                                    )
                                })
                            }
                        </select>
                    )
                }
                else if(field.type=="number"){
                    return (
                        <div key={field.name} className="mb-3">
                        <label  className="form-label">{field.name}:-</label>
                        <input type={field.type} className="form-control" 
                            onChange={(e)=>{
                                formdata[field.name] = e.target.value ; 
                                setFormdata({...formdata})
                            }}
                            value = {formdata[field.name]}
                        ></input>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={field.name} className="mb-3">
                        <label  className="form-label">{field.name}:-</label>
                        <input type="text" className="form-control" 
                            onChange={(e)=>{
                                formdata[field.name] = e.target.value ; 
                                setFormdata({...formdata})
                            }}
                            value = {formdata[field.name]}
                        ></input>
                        </div>
                    )
                }
        
        })
            
            
            }
            <div className="mt-4 text-center">
                <button className="btn btn-dark btn-lg" onClick={(e)=>{add_address(e);}}>Add Address</button>
            </div>
            </form>
            </div>
            </div>
            </div>

     );
}
 
export default AddAddressComponent;