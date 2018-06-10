import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  header: {
    margin: "0 0 3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center"
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryThresholds.M}px`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryThresholds.L}px`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  mark: {
    width: "130px",
    display: "block",
    margin: "0 0 0 10px",
    [`@media (min-width: ${theme.mediaQueryThresholds.M}px`]: {
      width: "170px"
    },
    [`@media (min-width: ${theme.mediaQueryThresholds.L}px`]: {
      width: "190px"
    }
  }
});

const PageHeader = props => {
  const { classes, title } = props;
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
    </header>
  );
};

Header.PropTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(PageHeader);