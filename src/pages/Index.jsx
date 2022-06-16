import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import Feed from "../components/Feed"

export default function Index ({posts,users}) {
    const [user,setUser]=useState(null)
    console.log(posts)

    const loaded =()=>{
        return(posts.map((post)=>{
            const user=((users.find(user => user._id === post.userID)))
        //     return(
        //     <div key={post._id}>
                
        //         <h2><Link key={user._id} to={`/profile/${user._id}`}>{user.userName}</Link></h2>
        //         <h3>{post.date}</h3>
        //         <h3>{post.message}</h3>
        //         <h3>{post.likes}</h3>
            
        //     </div>
        // )
        
        return(<Feed post={post} key={post._id} user={user}/>)
    }))
}

    const loading = () =>{<h1>Loading ...</h1>}
    return(
        <div>
             {posts && users  ? loaded() :  loading()}

        </div>
        
        
    )
}