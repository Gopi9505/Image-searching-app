import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
  
    if(result?.data?.results?.length>0){
        setImages(result?.data?.results);
    }

  };
  console.log(images) 
  
  return (
    <div>
      <div>
          <SearchBar onSubmit={handleSubmit} />
      </div>
      <ImageList images={images} />
    </div>
  );
}

export default App;
