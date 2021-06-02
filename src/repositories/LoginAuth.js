import http from "../http-common";
import sha256 from "sha256";

export function login (data) {
    let msg = '';
    http.post('/user/login',
        {email: data.email, password: sha256(data.password)})
        .then(response => {
            if (response.data) {
                sessionStorage.setItem('x-access-token', sha256(data))
                sessionStorage.setItem('x-access-token-expiration', Date.now() + 20 * 60 * 1000)
                sessionStorage.setItem('userid',  response.data)
                window.location = '/dashboard'
            } else {
                msg += 'Incorrect email or password.'
                alert(msg)
            }
        })
}
export function adminLogin (data) {
    let admmsg = '';
    http.post('/admin/login',
        {username: data.username, password: sha256(data.password)})
        .then(r => {
            if (r.data) {
                sessionStorage.setItem('x-access-token', sha256(data))
                sessionStorage.setItem('x-access-token-expiration', Date.now() + 20 * 60 * 1000)
                window.location = '/admin/dashboard'
            } else {
                admmsg += 'Incorrect email or password.'
                alert(admmsg)
            }
        })
}

export function isAuthenticated(){
    if (sessionStorage.getItem('x-access-token-expiration') < Date.now() || !sessionStorage.getItem('userid')) {
        sessionStorage.clear();
        window.location = '/login'
    } else {
        sessionStorage.setItem('x-access-token-expiration', Date.now() + 20 * 60 * 1000)
        return sessionStorage.getItem('x-access-token') && sessionStorage.getItem('x-access-token-expiration') > Date.now()
    }
}
