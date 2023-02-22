import { useState, useRef } from "react";
import ProjectCard from "../components/ProjectComponent";
import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleClick = (projectName) => {
    console.log("clicked");
    // console.log(`You clicked on the box for ${projectName}`);
    // TODO make this go to another page, fetch the images in the project and render it in the new page. later add a parameter which is the projectName
    navigate("/annotate");
  };

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileSelect = (event) => {
    // TODO upload the files to a server i suppose, if not then what is the backend for
    if (!event.target.files) {
      return;
    }

    setFile(event.target.files[0]);
    //TODO POST request to add an entry to the db i suppose. later for navigate function add a parameter projectName
    navigate("/annotate");
  };
  return (
    <div>
      <div>
        {/* TODO make this fetch all the project names from the API and do a for loop here */}
        <ProjectCard
          projectName="ML dataset"
          onClick={handleClick}
        ></ProjectCard>
        <ProjectCard
          projectName="ML dataset v2"
          onClick={handleClick}
        ></ProjectCard>
        <ProjectCard
          projectName="Create a new project"
          onClick={handleUploadClick}
        ></ProjectCard>
        <input
          type="file"
          id="file-input"
          ref={inputRef}
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
