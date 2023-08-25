import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignupModal from '../signup-modal/SignupModal'; // Adjust the path
import '../login-page-sm-devices/style.css';

function LoginPageForSmallDevice() {

  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleShowSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="login-page-sm-devices d-md-none">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 title-section-sm-devices">
            <h1 className="facebook-title-sm-devices mt-3 text-center">facebook</h1>
            <p className="facebook-headline-sm-devices text-center">
              Facebook helps you connect and share <br />
              with the people in your life.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card login-card-sm-devices">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address or phone number"
                      style={{ width: "100%" }} />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      style={{ width: "100%" }} />
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
}

export default LoginPageForSmallDevice;
