import { useState,useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import ShowProfile from "../pages/ShowProfile"
import User from "../pages/Users"

export default function Main(){
    const [posts,setPosts]=useState(null)
    const [users,setUsers]=useState(null)
    const URL = "https://my-mern-app-jp.herokuapp.com/"

    const getPosts= async () =>{
        const data = await fetch(URL + "posts")
        .then(res => res.json())
        .catch(err => console.log(err))
        setPosts(data)
    }
    const createPost = async (post) =>{
        console.log(post)
        await fetch(URL + "posts", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(post),

        })
        getPosts()  
    }
    const updatePost = async (post, id) =>{
        console.log(post)
        await fetch(URL + "posts/" +id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(post),

        })
        getPosts()  
    }
    const deletePost = async (id) => {
        await fetch(URL + "posts/" + id, {
            method: "DELETE"
        })
        getPosts()
    }


    const getUsers= async () =>{
        const data = await fetch(URL + "user")
        .then(res => res.json())
        .catch(err => console.log(err))
        setUsers(data)
    }
    
    useEffect(()=>{
        getPosts()
        getUsers()   
    },[])
      console.log(posts);
      console.log(users);
   
    const loaded=()=>{
       return( <div>
            
            <Routes>
                <Route 
                    path="/"
                    element={<Index posts={posts} users={users}/>}
                />
                <Route 
                    path="/profile/:id" 
                    element={<ShowProfile posts={posts} users={users} createPost={createPost} updatePost={updatePost} deletePost={deletePost}/>}
                />
                <Route 
                    path="/user/" 
                    element={<User users={users} />}
                />
        
            </Routes>
        </div>
       )
    }
    const loading=()=>(<h1>loading... </h1>)

    return posts ? loaded() : loading()
}