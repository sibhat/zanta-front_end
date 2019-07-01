import axios from "axios";

let api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

let profilesEndpoints = {
    // Todo: Add more profile endpoints
 
    me(){
        return api.get("/me/");
    },
    signIn(data) {
        let newData = {
            ...data,
            // username: "some",
            grant_type: "password",
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
        };
        return api.post(`/o/token/`, newData);
    },

    signUp(userType, data) {
        data = {
            ...data,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
        };

        return api.post(`/register/${userType}/`, data);
    },
    updateUser(userType, userId, data) {
        return api.patch(`/${userType}s/${userId}/`, data);
    }
};

let invitation = {
    createInvitation(data){
        return api.post(`/invitation/`, data)
    }
};
let billingEndpoints = {
    // Todo: Add billing endpoints here
        async charge(token, item) {
        return await api.post("/charge/", { token, item });
    }
};
let services = {
    getAllServices(){
        return api.get("/service/")
    }
};  

api.endpoints = {
    ...profilesEndpoints,
    ...billingEndpoints,
    ...services,
    ...invitation,
};
if (localStorage.getItem("user_token")) {
    api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("user_token")}`;
}
export default api;
