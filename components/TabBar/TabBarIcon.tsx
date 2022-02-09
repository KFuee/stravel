import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  isFocused: boolean;
}) => {
  return (
    <FontAwesome
      name={props.name}
      size={24}
      style={{ width: 24, height: 24 }}
      color={props.isFocused ? "#FCFCFD" : "#000000"}
    />
  );
};

export default TabBarIcon;
