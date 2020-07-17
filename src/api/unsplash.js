import axios from 'axios';

export default axios.create({
        baseURL: "https://api.unsplash.com/",
        headers: {
            Authorization: 'Client-ID VXGm4vlXSfRB8q1i1xTJ8Lkg4tiRpBDjlM-XtB8l23M'
        }
    }
);

