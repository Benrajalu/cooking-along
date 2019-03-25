import React, { Component, ReactNode } from "react";
import classnames from "classnames";
import styles from "./Title.module.scss";

interface Props {
  children: ReactNode | string;
  className?: string;
  size: "small" | "medium" | "large";
}

class Title extends Component<Props, {}> {
  static defaultProps = { size: "medium" };
  render() {
    const { children, className, size } = this.props;

    return (
      <h2 className={classnames(styles.title, className, styles[size])}>
        {children}
      </h2>
    );
  }
}

export default Title;
