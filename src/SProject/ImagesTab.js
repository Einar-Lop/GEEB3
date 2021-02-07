import React, { useState } from "react";
import styles from "./ImagesTabStyles.module.scss";
import {Redirect} from 'react-router-dom';
function ImagesTab(props) {
  
const project = props.project;
const [redirect, setRedirect]=useState(false);
const onClickInfo=()=>{
  setRedirect(true);
}
  return (
    redirect ? <Redirect to={"/sproject/"+project._id}/> :
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <p className={styles.Title}>{project.title}</p>
        <p className={styles.Description}>
          {project.imagesurls}
        </p>
      </div>
      <div className={styles.ButtonContainer}>
        <input
          value="More info"
          className={styles.Button}
          type="Button"
          onClick={onClickInfo}
        ></input>
      </div>
    </div>
  );
}

export default ImagesTab;