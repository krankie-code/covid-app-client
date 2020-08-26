import axios from 'axios'

const service = axios.create({
    baseURL:process.env.REACT_APP_API_URI,
});

const errorHandler = (err) => {
    throw err
};

export default {
    service,

    handleUpload(file){
        return service
            .post('/api/upload',file)
            .then((res)=> res.data)
            .catch(errorHandler);
    },

   
}