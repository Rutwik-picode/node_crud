import express from 'express'
import home from "../Controller/Home/home.js";
import signin from "../Controller/Auth/login.js";
import Registration from "../Controller/Auth/Registration.js";
const router = express.Router()

export const routes = [
    { method: 'get', url: '/', fun: [home.homepage] },
    //user dashboard
    { method: 'get', url: '/dashboard', fun: [home.dashboard] },

    //signin form
    { method: 'get', url: '/sign-in', fun: [signin.signin] },
    //login page
    { method: 'post', url: '/login', fun: [signin.login] },
    //logout
    { method: 'get', url: '/logout', fun: [signin.logout] },

    // signup form
    { method: 'get', url: '/sign-up', fun: [Registration.signuppage] },
    //Registration page
    { method: 'post', url: '/register', fun: [Registration.Registerpage] }
]

for (var i = 0; i < routes.length; i++) {
    
    let route = routes[i]

    if (route.method == 'get') router.get(route.url, route.fun.map(e => e))
    else if (route.method == 'post') router.post(route.url, route.fun.map(e => e))
}

export default router
