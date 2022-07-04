import axios from "axios";
let URL =axios.create({
    baseURL: "https://api.github.com/",


});

export default  URL;

