import { useLocation } from "react-router-dom";
import "../styles/listElement.css";
import { ReactComponent as SvgCounterDot } from "../assets/counterDot.svg";
import { ReactComponent as SvgAddPage } from "../assets/addPage.svg";
import CircularProgressBar from "./circularProgressBar";

const ListElement = (
  {
    defaultClass,
    totUnits,
    completedUnits,
    status,
    genre,
    saga
  }:
  {
    defaultClass: string,
    totUnits: number,
    completedUnits: number,
    status : string,
    genre: string,
    saga: string
  }
) => {
    const location = useLocation(); // Get current URL path

    // Define an explicit mapping of paths to colors
    const pathColors: Record<string, string> = {
        "/games": "games",
        "/anime": "anime",
        "/movies": "movies",
        "/books": "books",
        "/music": "music",
        "/sports": "sports",
    };
    // Use a fallback color if the pathname isn't in the mapping
    const cssClass = pathColors[location.pathname] || defaultClass;
    
    const statusColors: Record<string, string> = {
      "Active": cssClass,
      "On Hold": "on-hold",
      "Dropped": "dropped",
      "Planned": "planned",
      "Completed": "completed",
    };

    const statusClass = statusColors[status] || "";

    return (
      <div className={"list-element " + cssClass}>
        <div className="left-side-container">
          <div className="counter-containter">
            <p className="counter-num" >1</p>
            <SvgCounterDot className={cssClass + " counter-dot"}/>
          </div>
          <div className="title-space">
            <h1 className="title">Oysaumi Punpun</h1>
            <p className="author">Dan Abnett</p>
          </div>
        </div>
        <div className="center-container">
          <div className="progress-counter">
            <button onClick={() => {}}>
              <SvgAddPage className={cssClass + " add-page"}/>
            </button>
            <div className="progress-num">
              <span>{completedUnits}</span>
              <span>/</span>
              <span>{totUnits}</span>
            </div>
            <CircularProgressBar progress={40} cssClass={cssClass}/>
          </div>
          <div className="status-field-container">
            <span className="field-tag">Status</span>
            <span className={"status "+ statusClass}>{status}</span>
          </div>
        </div>
          <div className="right-side-container">
          <div className="element-field-container">
            <span className="field-tag">Genre</span>
            <span className="field">{genre}</span>
          </div>
        <div className="element-field-container">
          <span className="field-tag">Saga</span>
          <span className="field">{saga}</span>
        </div>
      </div>
    </div>
    );
};

export default ListElement;
