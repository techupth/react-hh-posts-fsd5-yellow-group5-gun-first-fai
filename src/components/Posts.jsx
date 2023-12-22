import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Paper Clips",
      content:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
      likes: 61,
    },
    {
      id: 2,
      title: "Born to Kill",
      content:
        "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      likes: 46,
    },
    {
      id: 3,
      title: "Ten Shrews, The (Kymmenen riivinrautaa)",
      content:
        "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      likes: 50,
    },
    {
      id: 4,
      title: "Ciel est Ã  vous, Le (Woman Who Dared, The)",
      content: "Maecenas ut massa quis augue luctus tincidunt.",
      likes: 3,
    },
    {
      id: 5,
      title: "Tigger Movie, The",
      content: "Aenean sit amet justo.",
      likes: 66,
    },
    {
      id: 6,
      title: "Cat People",
      content:
        "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      likes: 70,
    },
    {
      id: 7,
      title: "Brooklyn Castle",
      content:
        "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
      likes: 46,
    },
    {
      id: 8,
      title: "Snow Angels",
      content:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
      likes: 1,
    },
    {
      id: 9,
      title: "Rose Tattoo, The",
      content: "Curabitur in libero ut massa volutpat convallis.",
      likes: 20,
    },
    {
      id: 10,
      title: "It's A Wonderful World",
      content:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      likes: 6,
    },
  ]);
  const handleAddLikes = (index) => {
    const newLikes = [...posts];
    newLikes[index].likes = newLikes[index].likes + 1;
    setPosts(newLikes);
  };
  const handleDisLikes = (index) => {
    const newLikes = [...posts];
    if (newLikes[index].likes > 0) {
      newLikes[index].likes = newLikes[index].likes - 1;
    }
    setPosts(newLikes);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      {posts.map((post, index) => {
        return (
          <div className="post-list" key={index}>
            <div className="post-item">
              <div className="post-header">
                <h2>{`${post.title} #${post.id}`}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    handleAddLikes(index);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    handleDisLikes(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
