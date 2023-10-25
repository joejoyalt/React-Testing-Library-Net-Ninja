import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {

        const fetchFollowers = async () => {
            const { data } = await axios.get("https://randomuser.me/api/?results=5")
            setFollowers(data.results)
        }

        fetchFollowers()
    }, []);

<<<<<<< Updated upstream

=======
    const fetchFollowers = async () => {
        const { data } = await axios.get("https://randomuser.me/api/?results=5")
        setFollowers(data.results)
    }
>>>>>>> Stashed changes

    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
<<<<<<< Updated upstream
                    <div className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
=======
                    <div key={index} className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large} />
>>>>>>> Stashed changes
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
