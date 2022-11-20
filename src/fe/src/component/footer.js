import './footer.css';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex-box">
        <div className="footer-container">
          <div>
            <h2>Support</h2>
            <h4>Support</h4>
            <h4>Support</h4>
            <h4>Support</h4>
            <h4>Support</h4>
          </div>
          <div>
            <h2>Company</h2>
            <h4>Support</h4>
            <h4>Support</h4>
            <h4>Support</h4>
            <h4>Support</h4>
          </div>
          <div>
            <h2>Find Us</h2>
            <h4>Support</h4>
            <h4>Support</h4>
            <h4>Support</h4>
            <h4>Support</h4>
          </div>
        </div>
        <div className="footer-button-bar">
          <div>
            <h2>Country</h2>
            <img src="data:image/png;base64,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"></img>
          </div>
          <div>
            <h4>power by @gr03</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
