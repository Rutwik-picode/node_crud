import Register from "../../Model/Registration.js";

//sign in
const signin = (req, res) => {
    res.render('signin')
}

//user validation
const login = (req, res) => {
    const { email, pass } = req.body
    Register.findOne({ email: email, Password: pass })
        .then(user => {
            if (user.role === "user") {
                req.session.username = user.userName
                res.render('deshbord', { username: req.session.username })
            }
            else if (user.role === "admin") {
                req.session.username = user.userName
                res.render('Admindeshbord', { username: req.session.username })

            }
            else {
                const message = 'something wrong!!';
                const redirectUrl = '/sign-in'; // URL of the page to redirect to
                const script = `
            <script>
                alert('${message}');
                window.location.href = '${redirectUrl}';
            </>
        `;
                res.send(script);
            }
        })
}

const logout = (req, res) => {
    req.session.destroy
    res.render('index')
}


export default {
    signin,
    login,
    logout
}