import axios from 'axios'

const service = axios.create({
    baseURL:'http://localhost:4000',
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