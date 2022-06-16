import { useState } from "react";
import { Link } from "react-router-dom";
import {  useNavigate, useParams } from "react-router"


export default function Form({createPost}){
    const {id} =useParams();
    let navigate = useNavigate()
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

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/")
        createPost(newForm)
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
                    
                <button  onClick={(e)=>handleSubmit(e)}>Add Post</button>
            </form>
            
        </div>
    )
}
