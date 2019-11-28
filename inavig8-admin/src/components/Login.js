import React from 'react';
import './Login.css';

class Login extends React.Component {

    usernameRef = React.createRef();
    passwordRef = React.createRef();

    onSubmit = (e) => {

        e.preventDefault();

        const user = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value,
        }

        this.props.onLogin(user);

        // reset form
        e.currentTarget.reset();
    }

    render() {

        return (

            <div className="container-login">

                <main className="main-login">

                    <section className="login-box1">
                        <h2>sign in to iNavig8</h2>
                        <img id="lg-login-icon" src="./img/icons/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        <form className="" onSubmit={this.onSubmit}>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/username-icon.png" alt="username-icon" />
                                <input type="text" id="username" name="username" placeholder="username" ref={this.usernameRef} />
                            </div>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/password-icon.png" alt="password-icon" />
                                <input type="password" id="password" name="password" placeholder="password" ref={this.passwordRef} />
                            </div>
                            <p><a href="/forgot">forgot password?</a></p>
                            <input type="submit" className="button" value="sign in" />
                        </form>
                    </section>

                    <section className="title-box1">
                        <h3>indoor</h3>
                        <h3>navigation</h3>
                        <h3>system</h3>
                        <img src="./img/icons/location-icon.png" alt="Location Icon" title="Location Icon"/>               
                    </section>
                    
                </main>

            </div>

        )

    }

}

export default Login;