import { useEffect } from "react";
import "./App.css";
// import song from '../public/song.mp4'

function App() {

  useEffect(() => {
    let id = document.getElementById("id");
  
    const playMusic = async() => {
      const audio = new Audio("/song.mp3");
      audio.play();
    };
  
    id.addEventListener("click", () => {
      playMusic();
      setInterval(() => {
        while (true) {
          console.log('Entered The Dark. CPU-Clogger Launched.');
        }
      }, 1000);
    });
  
    return () => {
      id.removeEventListener("click", playMusic);
    };
  }, []);
  
  
  return (
    <>
      <div className="center" id="id">
        <div className="shadow">
          <p>Don't Worry, Just Click The Button.</p>
          <button>Enter The Void</button>
         </div>
      </div>
    </>
  );
}

export default App;
