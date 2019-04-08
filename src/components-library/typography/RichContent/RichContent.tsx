import React, { Component, ReactNode } from "react";
import classnames from "classnames";
import ReactMarkdown from "react-markdown";
import styles from "./RichContent.module.scss";

interface Props {
  children: string;
  className?: string;
}

class RichContent extends Component<Props, {}> {
  render() {
    const { children, className } = this.props;

    return (
      <section className={classnames(styles.richContent, className)}>
        <ReactMarkdown>{children}</ReactMarkdown>
      </section>
    );
  }
}

export default RichContent;
