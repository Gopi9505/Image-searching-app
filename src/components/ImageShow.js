function ImageShow({ image }) {
    return(
      <div>
        <img src={image.urls.regular} alt={image.alt_descripton} />
        <a href={image.links.download+'&force=true'} download={image.id+'.jpeg'}>
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
    );
}
  
export default ImageShow;
  