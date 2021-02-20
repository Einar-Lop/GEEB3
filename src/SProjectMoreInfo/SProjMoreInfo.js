import React, { useState, useEffect } from "react";
import styles from "./SProjMoreInfoStyles.module.scss";
import axios from "axios";

export default function SProjectMoreInfo(props) {
  const [project, setProject] = useState({
    title: "Loading Title...",
    description: "Loading...",
    userid: { username: "Loading..." },
    collaborators: ["Loading Collaborators..."],
    tags: ["Tag"],
    links: ["Link"],
    imageurls: ["Loading Images..."],
  });
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3010/sprojects/" + props.match.params.id, {
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        setIsOwner(response.data.isOwner);
        setProject(response.data.project);
      });
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TitleDesc}>
        {/* <p className={styles.Heading}>{project.title}</p> */}
        <p className={styles.Heading}>Restaurant Reviewer</p>
        <p className={styles.Author}>
          {/* <a>{project.userid.username}</a>'s portfolio */}
          <a>EinarLop</a>'s portfolio
        </p>
        {/* <p className={styles.Description}>{project.description}</p> */}
        <p className={styles.Description}>
          Soy Pepe el Grillo jijij dolor sit amet consectetur adipiscing, elit
          netus mollis vivamus torquent sollicitudin tincidunt, faucibus fusce
          quis himenaeos semper, faucibus fusce quis himenaeos semper.{" "}
        </p>
      </div>
      <div className={styles.TagsSection}>
        <label className={styles.Label}>Tags:</label>
        <div className={styles.TagsContainer}>
          {/*mapping of tags, randomly colorized*/}
          {/* {project.tags.map((tag) => (
            <div className={`${styles.Tag} ${styles.Want}`}>{tag}</div>
          ))} */}

          <div className={`${styles.Tag} ${styles.Test}`}>JS</div>
          <div className={`${styles.Tag} ${styles.Test2}`}>C++</div>
          {/* <div className={`${styles.Tag} ${styles.Test3}`}>C</div> */}
          <div className={`${styles.Tag} ${styles.Test4}`}>C</div>
        </div>
      </div>
      <div className={styles.LinksContainer}>
        <label className={styles.Label}>Project Links:</label>
        <ul className={styles.LinkList}>
          {/*Mapping of projects.links*/}
          {project.links.map((link) => (
            <div>
              <li>
                <a href={link} target="_blank">
                  Github.com
                </a>
              </li>

              <li>
                <a href={link} target="_blank">
                  {link.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </div>
            // <li>
            //   <a href={link} target="_blank">
            //     {link.replace(/^https?:\/\//, "")}
            //   </a>
            // </li>
          ))}
        </ul>
      </div>
      <div className={styles.Collaborators}>
        <label className={styles.Label}>Collaborators:</label>
        <div
          /*style={{display:'flex', padding:'10px'}}*/ className={
            styles.NamesContainer
          }
        >
          {/* Mapping of project.collaborators here, with Link to their profile id*/}
          {project.collaborators.map((collaborator) => (
            <p>{collaborator}</p>
          ))}
        </div>
      </div>
      <label className={styles.Label}>Images:</label>
      <div className={styles.ImagesSection}>
        {project.imageurls.map((img) => (
          <img src={img} />
        ))}
      </div>
    </div>
  );
}
