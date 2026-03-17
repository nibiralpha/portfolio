import "./ClientComponent.css";

export default function ClientComponent() {
  return (
    <div className="clients bg_img">
      <div className="heading">
        <div className="title">WORDS FROM CLIENTS</div>
        <hr className="hr"></hr>
        <div className="sub_title">OVER THE YEARS, I’VE PARTNERED.</div>
      </div>

      <div className="clients_comments">
        <div className="row">
          <div className="col-4">
            <div className="head_bar"></div>
            <div className="client_box">
              <div className="box_header">
                <div className="client_img">
                  <img
                    className="client_main_img"
                    src="/images/client1.png"
                  ></img>
                  <img
                    className="client_hover_img"
                    src="/images/buzz.webp"
                  ></img>
                </div>
                <div className="client_naming">
                  <div className="client_title">HUGO CHALVEZ</div>
                  <div className="client_position">FOUNDER HUGGOS AGENCY</div>
                </div>
              </div>
              <div className="client_description">
                A reliable creative partner with a sharp eye for detail. The
                process was smooth, and the results exceeded expectations.
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="head_bar"></div>
            <div className="client_box">
              <div className="box_header">
                <div className="client_img">
                  <img
                    className="client_main_img"
                    src="/images/client2.png"
                  ></img>
                  <img
                    className="client_hover_img"
                    src="/images/buzz.webp"
                  ></img>
                </div>
                <div className="client_naming">
                  <div className="client_title">HUGO CHALVEZ</div>
                  <div className="client_position">FOUNDER HUGGOS AGENCY</div>
                </div>
              </div>
              <div className="client_description">
                A reliable creative partner with a sharp eye for detail. The
                process was smooth, and the results exceeded expectations.
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="head_bar"></div>
            <div className="client_box">
              <div className="box_header">
                <div className="client_img">
                  <img
                    className="client_main_img"
                    src="/images/client3.png"
                  ></img>
                  <img
                    className="client_hover_img"
                    src="/images/buzz.webp"
                  ></img>
                </div>
                <div className="client_naming">
                  <div className="client_title">HUGO CHALVEZ</div>
                  <div className="client_position">FOUNDER HUGGOS AGENCY</div>
                </div>
              </div>
              <div className="client_description">
                A reliable creative partner with a sharp eye for detail. The
                process was smooth, and the results exceeded expectations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
