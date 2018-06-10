import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
require("core-js/fn/array/find");

import InfoMenu from "./InfoMenu";
import InfoHeader from "./InfoHeader";
import InfoText from "./InfoText";

import { featureNavigator, moveNavigatorAside } from "../../utils/shared";
import { setNavigatorPosition, setNavigatorShape } from "../../state/store";