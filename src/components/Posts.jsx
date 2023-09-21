import Post from "./Post"
export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "kakicg",
            userImg: "https://i.pravatar.cc/150?img=5",
            img: "https://images.unsplash.com/photo-1694802519363-42c4067833c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            caption: "This is a test",
        },
        {
            id: "2",
            username: "cgkojo",
            userImg: "https://i.pravatar.cc/150?img=3",
            img: "https://images.unsplash.com/photo-1694802519363-42c4067833c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            caption: "Nice one",
        },
    ]
  return (
    <div>
      {posts.map((post) => (
          <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  )
}
