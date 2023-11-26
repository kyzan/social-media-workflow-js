import { React, useState } from "react";
import "./CreatePost.css"

export default function CreatePost() {
    const [file, setFile] = useState("https://images.unsplash.com/photo-1576158114131-f211996e9137?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className="createPost">
            <div className="post-header">
                <h4>Create New Post</h4>
                <button id="post-btn">Share</button>
            </div>
            <div className="main-div">
                <input type="file" accept="image/*" onChange={handleChange}></input>
                <img className="preview-image" src={file}></img>
            </div>
            <div className="details">
                <div className="card-header">
                    <div className="card-pic">
                    <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=cPytjchmnWau9d1sdPlqB3LEZtMAjqRss6MLVpRu6PE=" />
                    </div>
                    <h4>userName</h4>
                </div>
                <textarea type="text" placeholder="Add caption"></textarea>
            </div>
        </div>
    )
}