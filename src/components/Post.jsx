import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline"
export default function Post({username, userImg, img, caption, id}) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
        
        </div>
        {/* Post Image */}
        <img src={img} alt="" className="object-cover w-full" />
        {/* Post Buttons */}
        <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
                <HeartIcon className="btn" />
                <ChatIcon className="btn" />
            </div>
            <BookmarkIcon className="btn" />
        </div>
        {/* Post Comment */}
        <p className="p-5 truncate">
            <span className="font-bold mr-1">{username}</span>{caption}
        </p>
        {/* Post input box */}
        <form className="flex items-center p-4">
            <EmojiHappyIcon className="h-7" />
            <input type="text" placeholder="Add a comment..." className="border-none flex-1 focus:ring-0 outline-none" />
            <button className="text-blue-400 font-bold">Post</button>
        </form>
    </div>
  )
}
