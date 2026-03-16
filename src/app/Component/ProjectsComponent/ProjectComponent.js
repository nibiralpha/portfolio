import "./ProjectComponent.css";

export default function OurApproachComponent() {
  return (
    <div className="projects">
      <div className="project_section">
        <div className="project_menu">
          <div className="project_menus">
            <div className="menu_text">Arca Collective</div>
            <div className="menu_text">Miren Health</div>
            <div className="menu_text">Vestra Advisory</div>
            <div className="menu_text">Studio Kline</div>
          </div>
        </div>
        <div className="project_gallery">
          <div className="project_slider">
            <div className="project">
              <img src="/images/project1.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
