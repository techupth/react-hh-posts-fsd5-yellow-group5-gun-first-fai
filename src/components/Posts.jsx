import { useState } from "react";
import postInfo from "./PostsInfo";

function Posts() {
  const [likes, setLikes] = useState(postInfo.map((post) => post.likes));

  const handleAddLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] += 1;
      return newLikes;
    });
  };

  const handleDislike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = Math.max(0, (newLikes[index] -= 1));
      return newLikes;
    });
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postInfo.map((item, index) => (
          <div className="post-item" key={index}>
            <div className="post-header">
              <h2>
                {item.title} #{item.id}
              </h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{likes[index]}</span>
              </div>
            </div>
            <p className="post-content">{item.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => handleAddLike(index)}
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
