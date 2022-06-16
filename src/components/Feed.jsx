import { Link } from "react-router-dom";

export default function Feed({post , user}){
    const loaded =()=>{
    return(
        <div >
            
            <h2><Link className="link" key={user._id} to={`/profile/${user._id}`}>{user.userName}</Link></h2>
            <h3>{post.date}</h3>
            <h3>{post.message}</h3>
            <h3>{post.likes}</h3>
        
        </div>
    )
    }
    const loading = () =>{<h1>Loading ...</h1>}
    return(
        <div>
             {post && user  ? loaded() :  loading()}

        </div>
        
        
    )
}
