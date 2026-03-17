import "./Footer.css";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div>
        <div className="footer_head">READY TO BRING FOCUS TO YOUR BRAND?</div>
        <div className="footer_image">
          <img src="/images/vr.webp" />
        </div>
      </div>
      <div className="row footer_start">
        <div className="col-4">
          <div className="detail1">HELLO@8AM.DESIGN</div>
        </div>

        <div className="col-4">
          <div className="detail2">
            <div className="detail2_margin">
              If you value clarity, intention, and thoughtful brand building, we
              may be a good fit.
            </div>
            <div>Let’s Build Together!</div>
          </div>
        </div>

        <div className="col-4">
          <div className="footer_menu_container">
            <div className="footer_menu">
              <div>License</div>
              <div>Style Guide</div>
              <div>404</div>
              <div>Changelog</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
