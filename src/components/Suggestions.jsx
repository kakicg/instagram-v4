"use client"
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useEffect, useState } from 'react'
export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = minifaker.array(5, (i)=> ({
      username: minifaker.username({ locale: "en"}).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((profile) => (
        <div key={profile.id} className="flex items-center justify-between mt-3">
          <img className="w-10 h-10 rounded-full border p-[2px]" src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400 truncate w-[230px]">{profile.jobTitle}</h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
    
  )
}
