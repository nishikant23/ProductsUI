import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const images: string[] = [
    "https://i.pinimg.com/736x/d9/2c/5e/d92c5e024bc44e9ceedbccf223455245.jpg",
    "https://c4.wallpaperflare.com/wallpaper/409/952/920/dragon-ball-z-son-goku-portrait-display-wallpaper-preview.jpg",
    "https://i.pinimg.com/736x/8a/a1/65/8aa165d43da8b50ece5fa818725a9821.jpg",
    "https://c4.wallpaperflare.com/wallpaper/363/644/48/anime-naruto-wallpaper-preview.jpg",
    "https://i.pinimg.com/236x/9a/c7/31/9ac73117fd46bb5575cea43e0a864c46.jpg",
    "https://m.media-amazon.com/images/I/71T1m4S4mcL.jpg",
    "https://wallpapers.com/images/hd/jiraiya-naruto-anime-character-uqm3zkygaxzuu802.jpg",
    "https://i.pinimg.com/736x/22/1c/8e/221c8e898aeee45d6ec6cca3a0fed99e.jpg",
    "https://m.media-amazon.com/images/I/61mMgtcJ9hL._AC_UF1000,1000_QL80_.jpg",
    "https://i.pinimg.com/236x/33/a4/f7/33a4f7a938338edc9a00c2fc19ed15da.jpg",
    "https://preview.redd.it/rock-lee-v0-zcpdn8ujxccd1.jpeg?width=640&crop=smart&auto=webp&s=44404b189f5eb187660d32c7cbf713a22e049a1f",
  ];

  const [currIndex, setCurrIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((p) => (p + 1) % images.length);
    }, 400);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center px-4">
      {/* Title */}
      <div className="text-center py-8 flex justify-center items-center">
        <h1 className="text-2xl font-medium">Welcome to,</h1>
        <em><p className="text-4xl font-serif font-bold text-yellow-500 px-2">ShopIn</p></em>
      </div>

      {/* Image Animation */}
      <div className="flex justify-center items-center h-96 mb-6">
        <div className="relative w-72 h-96 rounded-xl overflow-hidden">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className={`absolute w-72 h-96 object-cover shadow-2xl rounded-xl transition-opacity duration-1000 ease-in-out
                ${index === currIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              alt={`carousel-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Pitch Section */}
      <div className="max-w-2xl text-center text-lg md:text-xl font-medium leading-relaxed space-y-2 mb-10">
        <p>
          — Manage all your items in one place — 
        </p>
        <p className="text-gray-300">
          Everything is now <span className="font-semibold text-white">hassle free, just</span> — {' '}
          <span className="text-yellow-500">Create, View, Edit, Delete</span>,{" "}
           with ease.
        </p>
      </div>

      {/* CTA Button */}
      <button 
            onClick={() => navigate("/items")}
            className="font-bold  rounded-lg p-3 text-black bg-white hover:text-black hover:scale-90 transistion duration-400  ease-in-out hover:bg-yellow-400 w-full items-center cursor-pointer">
                Let's Dive In
        </button>
    </div>
  );
};
