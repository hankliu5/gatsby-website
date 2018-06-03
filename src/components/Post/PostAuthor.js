import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

const styles = theme => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      color: theme.base.colors.link
    },
    [`@media (min-width: ${theme.mediaQueryThresholds.M}px)`]: {
      flexDirection: "row",
      justifyContent: "center"
    }
  },
  box: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50px",
    alignItems: "center"
  }
});

const PostAuthor = props => {
  const { classes, author } = props;
  return (
    <div className={classes.author}>
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: author.html }} />
    </div>
  );
}

PostAuthor.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostAuthor);