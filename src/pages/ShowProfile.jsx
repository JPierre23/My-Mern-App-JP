import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import Feed from "../components/Feed";
import Form from "../components/Form";


export default function ShowProfile({posts,users, createPost, updatePost, deletePost}) {
    const {id} =useParams();
    let navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        userID:id,
        message: "",
        likes:0,
        
    })


    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault()
        createPost(newForm)
        setNewForm({
            message: "",
            
        })
    }
    
    const loaded =() =>{
        const user=((users.find(user => user._id === id)))
        const userFeed = posts.filter((post) => post.userID === id )
        console.log(userFeed)
       // console.log( uid)
        return (userFeed.map((post) => {
            
            return (
                <div key={post._id}>
                    <input placeholder={post.message} type="text"name="message" onChange={handleChange}/> 
                    <button onClick={(e)=>{updatePost(newForm,post._id)}}>Edit Post</button>
                    <button onClick={(e)=>{deletePost(post._id)}}>X</button>
                 </div>
            )
        }
        ))
    }
    const loading = () =>{<h1>Loading ...</h1>}
    return(
        <div>
            <Form createPost={createPost} handleSubmit={handleSubmit} handleChange={handleChange}/>
             {posts && users  ? loaded() :  loading()}

        </div>
        
        
    )
}