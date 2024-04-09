//home page
const homepage = (req, res) => {
    res.render('index')
    // res.send('hello world');
}

//user dashboard
const dashboard = (req, res) => {
    res.render('deshbord')
}

export default {
    homepage,
    dashboard
}