import React from "react";
import "./Profile.css"

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-frame">
                <div className="profile-pic">
                    <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=cPytjchmnWau9d1sdPlqB3LEZtMAjqRss6MLVpRu6PE=" />
                </div>
                <div className="profile-data">
                    <h1>userName</h1>
                    <div className="profile-info">
                        <p>1 post</p>
                        <p>1 follower</p>
                        <p>1 following</p>
                    </div>
                </div>
            </div>
            <div className="gallery">
            <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=cPytjchmnWau9d1sdPlqB3LEZtMAjqRss6MLVpRu6PE=" />
            <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=cPytjchmnWau9d1sdPlqB3LEZtMAjqRss6MLVpRu6PE=" />
            <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=cPytjchmnWau9d1sdPlqB3LEZtMAjqRss6MLVpRu6PE=" />
            </div>
        </div>
    )
}