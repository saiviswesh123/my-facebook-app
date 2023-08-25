import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignupModal from '../signup-modal/SignupModal'; // Adjust the path
import '../login-page-md-devices/style.css';

const LoginPage = () => {  

  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleShowSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="login-page d-none d-md-block">
      <div className="container">
        <div className="row">

          {/* <!-- title column --> */}

          <div className="col-12 col-md-6 title-section-md-devices">
            <h1 className="facebook-title-md-devices">facebook</h1>
            <p className="facebook-headline-md-devices">
              Facebook helps you connect and share <br />
              with the people in your life.
            </p>
          </div>

          {/* <!-- login section --> */}

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center vh-100">
            <div className="card login-card">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Email address or phone number"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary login-button">
                      Login
                    </button>
                    <a href="" className="text-center mt-3">
                      <p>Forgotten password</p>
                    </a>
                  </div> 
                  <hr /> 
                  <div className="d-flex justify-content-center">
                <Button
                  onClick={handleShowSignupModal}
                  className="btn btn-success m-2"
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  Create new account
                </Button>
              </div>              
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignupModal show={showSignupModal} handleClose={handleCloseSignupModal} />
    </div>
  );
};

export default LoginPage;
