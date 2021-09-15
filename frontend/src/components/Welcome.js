import React from "react";
import welc from "./welcome.jpg";
import { withRouter } from "react-router-dom";

class Welcome extends React.Component {
  pwdreset = () => {
    console.log("pwd reset");
    this.props.history.push("/passwordReset");
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", margin: "30px" }}>Greetings!</h1>
        <div style={{ height: "200px", position: "relative" }}>
          <p style={{ textAlign: "center", margin: "30px" }}>
            If you registered using your account, in order to recieve an email
            to reset password, kindly enable access to less secure apps{" "}
            <a
              href="https://support.google.com/accounts/answer/6010255?hl=en"
              target="_blank"
            >
              here
            </a>
          </p>
          <button
            className="btn btn-danger mt-3 ml-3"
            style={{ position: "absolute", left: "45%" }}
            onClick={() => this.pwdreset()}
          >
            Reset Password
          </button>
        </div>
        <img className="img-fluid w-100" src={welc} alt="" />
      </>
    );
  }
}

export default withRouter(Welcome);
