import ImageShow from './ImageShow';
import './ImageList.css'

function ImageList(props) {
//  console.log(props.images);
//  console.log(typeof props.images);
  const renderedImages = props.images.map((a) => {
    return <ImageShow key={a.id} image={a} />;
  });

  return <div className='image-list'>{renderedImages}</div>;
}

export default ImageList;