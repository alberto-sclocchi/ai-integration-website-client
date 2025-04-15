import axios from 'axios';

export default class MessageService {
    constructor() {
        let service = axios.create({
            baseURL: `http://localhost:5005/message`,

    })
        this.service = service;
    }

    createMessage(message){
        return this.service.post('/', message).then((resp) => {
            console.log("Message created: ", resp.data);
            return resp.data;
        })
    }

    getMessages(){
        return this.service.get("/").then((resp) => {
            console.log({allMessages: resp.data.message})
            return resp.data.message;
        })
    }
    
}
