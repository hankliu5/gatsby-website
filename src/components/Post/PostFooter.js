import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import PostAuthor from "./PostAuthor";

const styles = theme => ({
  footer: {
    color: theme.main.colors.footer,
    fontSize: `${theme.main.fonts.footer.size}em`,
    lineHeight: theme.main.fonts.footer.lineHeight,
    "& p": {
      margin: 0
    }
  }
});

const PostFooter = ({ classes, author }) => {
  return (
    <footer className={classes.footer}>
      <PostAuthor author={author} />
    </footer>
  );
}

PostFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}

export default injectSheet(styles)(PostFooter);