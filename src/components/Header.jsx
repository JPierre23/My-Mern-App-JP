import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="link-bar">
            <div><Link className="link" to="/"><h1>Home</h1></Link></div>
            <div><Link className="link" to="/user"><h1>Profile</h1></Link></div>   
        </div>
        )
}