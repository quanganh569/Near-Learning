import React from "react";
import PropTypes from "prop-types";
import Big from "big.js";

export default function Form({ onSubmit, currentUser }) {
  console.log("CurrentUser", currentUser);
  return (
    <div className="container">
      {/* <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          Hello !{" "}
          <span
            class="badge badge-secondary"
            style={{ background: "lightgray", color: "white" }}
          >
            {currentUser.accountId}
          </span>
          <div class="form-group row">
            <p class="form-control" className="highlight py-2 d-flex">
              <span htmlFor="message" className="mt-2 ">
                Lời nhắn:
              </span>
              <input
                autoComplete="off"
                class="form-control "
                autoFocus
                id="message"
                required
              />
            </p>
            <p>
              <label htmlFor="donation">Donation (optional):</label>
              <input
                autoComplete="off"
                defaultValue={"0"}
                id="donation"
                max={Big(currentUser.balance).div(10 ** 24)}
                min="0"
                step="0.01"
                type="number"
              />
              <span title="NEAR Tokens">Ⓝ</span>
            </p>
            <button type="submit">Donate</button>
          </div>
        </fieldset>
      </form> */}

      <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        Xin chào, Tài khoản{" "}
        <span
          class="badge badge-secondary"
          style={{ background: "red", color: "white" }}
        >
          {currentUser.accountId}
        </span>
        <div class="form-group row py-3">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Lời nhắn :
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              class="form-control "
              autoFocus
              id="message"
              required
            />
          </div>
        </div>
        <div class="form-group row py-3">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Donate
          </label>
          <div class="col-sm-10 d-flex ">
            <input
              class="form-control"
              autoComplete="off"
              defaultValue={"0"}
              id="donation"
              max={Big(currentUser.balance).div(10 ** 24)}
              min="0"
              step="0.01"
              type="number"
            />
            <span title="NEAR Tokens">Ⓝ</span>
          </div>
        </div>
        <div class="container ">
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-primary">
              Donate
            </button>
          </div>
        </div>
        </fieldset>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
};
