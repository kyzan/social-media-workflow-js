import React from "react";
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="card">
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=cPytjchmnWau9d1sdPlqB3LEZtMAjqRss6MLVpRu6PE="/>
                    </div>
                    <h5>userName</h5>
                </div>
                <div className="card-image">
                    <img src="https://media.istockphoto.com/id/688945470/photo/cricket-player-in-action.jpg?s=1024x1024&w=is&k=20&c=KrnE3hXsL_e8g2P3PhwJFRm2kmTzAkchapA3_5rLTE0=" />
                </div>
                <div className="card-content">
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    <p>1 Like</p>
                    <p>This is amazing</p>
                </div>
                <div className="add-comment">
                    <span className="material-symbols-outlined">sentiment_very_satisfied</span>
                    <input type="text" name="comment" placeholder="Add a comment"></input>
                    <button className="comment-btn">Post</button>
                </div>
            </div>
        </div>
    )
}