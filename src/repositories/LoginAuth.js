import http from "../http-common";
import sha256 from "sha256";

export function login (data) {

    http.post('/user/login',
        {email: data.email, password: sha256(data.password) })
        .then(response => {
            if (response.data === true) {
                sessionStorage.setItem('x-access-token', sha256(response.data))
                window.location = '/dashboard'
            } else {
                alert("FAILURE")
            }
        })
}
