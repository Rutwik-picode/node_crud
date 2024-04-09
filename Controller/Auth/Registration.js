import Joi from "joi";
import Register from "../../Model/Registration.js";

const signuppage = (req, res) => {
    res.render('signup')
}

const validate = Joi.object({
    name: Joi.string().required().min(3).max(25),
    email: Joi.string().email().required(),
    pass: Joi.string().min(8).max(25).required(),
    cpass: Joi.any().required().equal(Joi.ref('pass'))
});


const Registerpage = async (req, res) => {
    const { name, email, cpass } = req.body

    const isExistEmail = await Register.findOne({ email: email })

    const { error, data } = validate.validate(req.body, { abortEarly: false })
    if (error) {
        req.session.error = error.details
        const message = 'something wrong!!';
        const redirectUrl = '/sign-up';
        const script = `
            <script>
                alert('${message}');
                window.location.href = '${redirectUrl}';
            </script>
        `;
        res.send(script);
    }
    else {

        if (!isExistEmail) {

            const newUser = new Register({
                userName: name,
                email: email,
                Password: cpass
            })

            newUser.save()

            const message = 'You are Registered';
            const redirectUrl = '/sign-in';
            const script = `
                    <script>
                        alert('${message}');
                        window.location.href = '${redirectUrl}';
                    </script>
                `;
            res.send(script);
        }
        else {
            const message = 'Email address is Exist ';
            const redirectUrl = '/sign-up';
            const script = `
                <script>
                    alert('${message}');
                    window.location.href = '${redirectUrl}';
                </script>
            `;
            res.send(script);
        }

        // 
    }

}

export default {
    Registerpage,
    signuppage
}
