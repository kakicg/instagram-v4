
export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
     <img className="h-16 p-[2px] border rounded-full" src="/kakiyama.jpg" alt="user-image" />
     <div className="flex-1 ml-4">
        <h2 className="font-bold">kakicg</h2>
        <h3 className="text-sm text-gray-400">Welcome to my Instagram</h3>
     </div>
     <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  )
}
