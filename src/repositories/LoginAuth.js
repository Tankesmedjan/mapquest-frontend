import http from "../http-common";
import sha256 from "sha256";
import React from "react";

export function login (data) {

    var msg = '';
    http.post('/user/login',
        {email: data.email, password: sha256(data.password) })
        .then(response => {
            if (response.data === true) {
                sessionStorage.setItem('x-access-token', sha256(data))
                sessionStorage.setItem('x-access-token-expiration', Date.now() + 20 * 60 * 1000)
                window.location = '/dashboard'
            } else {
                msg += 'Incorrect email or password.'
                alert(msg)
            }
        })
}

export function isAuthenticated(){
    if (sessionStorage.getItem('x-access-token-expiration') < Date.now()) {
        sessionStorage.clear()
        window.location = '/login'
    } else {
        sessionStorage.setItem('x-access-token-expiration', Date.now() + 20 * 60 * 1000)
        return sessionStorage.getItem('x-access-token') && sessionStorage.getItem('x-access-token-expiration') > Date.now()
    }
}
