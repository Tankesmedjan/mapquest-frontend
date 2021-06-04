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
                sessionStorage.setItem('xx-access-token', sha256(data))
                sessionStorage.setItem('xx-access-token-expiration', Date.now() + 20 * 60 * 1000)
                window.location = 'admin/dashboard'
            } else {
                admmsg += 'Incorrect email or password.'
                alert(admmsg)
            }
        })
   isAdminAuth()
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

export function isAdminAuth() {
    let userFound = false;
    http.get('/admin')
        .then(r=> {
            let allAdmins = r.data
            allAdmins.map((adminuser) => {
                let currentAdmin = {username: adminuser.username, password: adminuser.password}
                if (sessionStorage.getItem('xx-access-token') === sha256(currentAdmin)) {
                   userFound = true;
                   return true;
                }
            }
            )
            if (!userFound) { window.location = '/admin' }

        })
}
