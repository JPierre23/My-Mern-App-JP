import { useState } from "react";
import { Link } from "react-router-dom";
import {  useParams } from "react-router"


export default function Form({createPost,handleSubmit}){
    const {id} =useParams();
    const [newForm, setNewForm] = useState({
        userID:id,
        message: "",
        likes:0,
        
    })

    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }


    return(
        <div>
            <form>
                <h2></h2>
                <input
                    type="text"
                    name="message"
                    placeholder="Add Post"
                    value={newForm.message}
                    onChange={handleChange}
                    className="text" 
                    />
                    
                <button  onClick={(e)=>{createPost(newForm)}}>Add Post</button>
            </form>
            
        </div>
    )
}
