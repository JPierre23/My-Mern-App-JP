import { Link } from "react-router-dom"

export default function User({users}) {

    
    const loaded = () =>{
       return( users.map((user)=>{
            return(
                <div key={user._id}>
                    <h2><Link className="link" key={user._id} to={`/profile/${user._id}`}>{user.userName}</Link></h2>
                
                </div>
            )
        })
        )
    }
    const loading = () =>{<h1>Loading ...</h1>}
    return(
        <div>
            {users ? loaded() : loading()}
        </div>
    )
}
