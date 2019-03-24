import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import styles from "./Shell.module.scss";

class Shell extends Component {
  render() {
    return (
      <div className={styles.shell}>
        <FontAwesomeIcon icon={faCoffee} />
        Hello World
      </div>
    );
  }
}

export default Shell;
