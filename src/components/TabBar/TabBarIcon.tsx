import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  isFocused: boolean;
}) => {
  return (
    <FontAwesome
      name={props.name}
      size={28}
      style={{
        width: 28,
        height: 28,
        textAlign: "center",
        textAlignVertical: "center",
        lineHeight: 28,
      }}
      color={props.isFocused ? "#FCFCFD" : "#000000"}
    />
  );
};

export default TabBarIcon;
