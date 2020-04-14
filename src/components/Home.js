import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Header from './Header';
import { GoogleLogin, GoogleLogout } from 'react-google-login'

class Home extends Component {


    _logout = () => {
        this.props._resetState()
        this.props.history.push("/")
    }

    getContent = () => {
        const { isSignedIn, username } = this.props.credentials
        return isSignedIn ?
            <div>
                <p>Hello {username}, you're signed in </p>
                <GoogleLogout
                    clientId="450224643692-epj8fht9ckfljd6pgr46g0gc0bts22jb.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this._logout}
                />
            </div>
            :
            <div>
                <p>You are not signed in</p>
                <GoogleLogin
                    clientId="450224643692-epj8fht9ckfljd6pgr46g0gc0bts22jb.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.props._login}
                    onFailure={this.props._loginerror}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>

    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <Header
                    credentials={this.props.credentials}
                    _resetState={this.props._resetState}
                    history={this.props.history}
                    origin="home" />
                <div>
                    <h1>Home page</h1>
                    <div style={{ textAlign: "center" }}>
                        {this.getContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
