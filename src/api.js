import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization : 'Client-ID uHndQMkGdSFTqQpwTjs4PLhkU70pT0cVCnIFthDb3iE'
        },
        params:{
            query : term,
        }
    });
    console.log(response);
    return response;
};

export default searchImages;