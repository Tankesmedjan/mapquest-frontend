import http from "../http-common";
import sha256 from "sha256";

export function login (data) {

    var remainingAttempts = 3;
    var msg = '';
    http.post('/user/login',
        {email: data.email, password: sha256(data.password) })
        .then(response => {
            if (response.data === true) {
                sessionStorage.setItem('x-access-token', sha256(response.data))
                window.location = '/dashboard'
            } else {
                msg += 'Incorrect email or password. Remaining attempts: ' + remainingAttempts;
                alert(msg)
                remainingAttempts--;
            }
        })
}
