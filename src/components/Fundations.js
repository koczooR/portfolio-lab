export const Fundations = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="carousel_box">
          <div className="carousel_left">
            <span className="carousel_left-title">{post.title}</span>
            <span className="carousel_left-text">{post.text}</span>
          </div>
          <div className="carousel_right">
            <span>{post.items}</span>
          </div>
        </div>
      ))}
    </>
  );
};
