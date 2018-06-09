import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import theme from "../styles/theme";
import globals from "../styles/globals";

import { setFontSizeIncrease, setIsWideScreen } from "../state/store";

import asyncComponent from "../components/common/AsyncComponent/";
import Loading from "../components/common/Loading/";
import Navigator from "../components/Navigator/";
import ActionsBar from "../components/ActionsBar/";
import InfoBar from "../components/InfoBar/";