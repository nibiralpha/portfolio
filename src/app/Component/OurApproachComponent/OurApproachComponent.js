import ListComponent from "../ListComponent/ListComponent";
import "./ourApproachComponent.css";

export default function OurApproachComponent() {
  return (
    <div className="approach">
      <div className="section_head">OUR APPROACH</div>
      <div className="list_container">
        <ListComponent
          number={"01"}
          title={"Discovery & Context"}
          subTitle={"Brand work is most effective when decisions."}
        />
        <ListComponent
          number={"02"}
          title={"Positioning & Narrative"}
          subTitle={"Brand work is most effective when decisions."}
        />
        <ListComponent
          number={"03"}
          title={"Structural Framework"}
          subTitle={"Brand work is most effective when decisions."}
        />
        <ListComponent
          number={"04"}
          title={"Creative Direction"}
          subTitle={"Brand work is most effective when decisions."}
        />
        <ListComponent
          number={"05"}
          title={"FINAL BRAND SYSTEM"}
          subTitle={"Brand work is most effective when decisions."}
        />
      </div>
    </div>
  );
}
