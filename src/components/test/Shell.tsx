import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import styles from "./Shell.module.scss";

class Shell extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.shell}>
        {children} &nbsp;
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}

export default Shell;
