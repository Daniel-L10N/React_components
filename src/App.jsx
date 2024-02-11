
import './App.css'
import { Heart, Bookmark, Share2 } from 'react-feather';
import Image_card from './components/Image_card/Image_card';


function App() {
  <script src="https://cdn.tailwindcss.com"></script>
  return (
    <main className='App'>
    <h1>Image_Card</h1>
    <Image_card imgsrc= '../img/daniel.jpeg' img_alt='image'>
      <h3 className='text-xl font-bold mb-2 '>Daniel</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A at dolore.</p>
      
      {/* El uso del siguiente container requiere la instalacion de libreria @react-refresh */}
      <div className='space-x-4 mt-4 '>
        <button className='btn'>
          <Heart />
        </button>
        <button className='btn '>
          <Bookmark />
        </button>
        <button className='btn '>
          <Share2 />
        </button>
      </div>
      
    </Image_card>
    </main>
  )
}

export default App;
