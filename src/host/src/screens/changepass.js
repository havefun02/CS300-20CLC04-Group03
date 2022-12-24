import './changepass.css';
export default function ChangePass() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <form onSubmit={() => {}}>
        <div className="Changepass-container">
          <h1>Change Password</h1>
          <input
            type="password"
            placeholder="Enter Old Password"
            name="old-psw"
            id="old-psw"
            required
          ></input>

          <input
            type="password"
            placeholder="Enter New Password"
            name="new-psw"
            id="new-psw"
            required
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          ></input>
          <button type="submit" className="Changepass-confirm">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
