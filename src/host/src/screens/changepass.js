export default function ChangePass() {
  return (
    <form action="Changepass">
      <div className="Changepass-container">
        <h1>Change Password</h1>
        <label for="old-psw">
          <b>Old password</b>
        </label>
        <br></br>
        <input
          type="password"
          placeholder="Enter Old Password"
          name="old-psw"
          id="old-psw"
          required
        ></input>
        <br></br>

        <label for="new-psw">
          <b>New Password</b>
        </label>
        <br></br>
        <input
          type="password"
          placeholder="Enter New Password"
          name="new-psw"
          id="new-psw"
          required
        ></input>
        <br></br>
        <label for="psw-repeat">
          <b>Repeat New Password</b>
        </label>
        <br></br>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        ></input>
        <br></br>
        <button type="submit" className="Changepass-confirm">
          Confirm
        </button>
      </div>

      <div className="Changepass-signin">
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </form>
  );
}
