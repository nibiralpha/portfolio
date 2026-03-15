import "./listComponent.css";

export default function ListComponent({ number, title, subTitle }) {
  return (
    <div>
      <div className="list">
        <div className="left_contents">
          <div className="index">{number}</div>
          <div className="middle_content">
            <div className="approach_title">{title}</div>
            <div className="approach_sub_title">{subTitle}</div>
          </div>
        </div>
        <div className="approach_icons">
          <div className="approach_icon">
            <img src={"/images/brifcase.svg"} height="50px" width="50px" />
          </div>
          <div className="approach_icon">
            <img src={"/images/home.svg"} height="50px" width="50px" />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
