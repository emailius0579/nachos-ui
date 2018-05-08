import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const Strong = props => {
  const textProps = {
    ...props,
    theme: props.theme.base
  };
  console.log(textProps);
  return <Text {...textProps} />;
};

Strong.themeConfig = {
  style: {
    base: {
      fontSize: 14,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "bold"
    }
  }
};

Strong.propTypes = { theme: PropTypes.object };

export default withTheme("Strong", Strong);
