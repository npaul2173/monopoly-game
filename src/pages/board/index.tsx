import { useState } from "react";
import { tss } from "../../theme/tss";
// NOTE: If you don't have a theme you can import { tss } from "tss-react";

export type Props = {
  className?: string;
};

export const BoardPage = (props: Props) => {
  const { className } = props;
  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes, cx /*,myTheme*/ } = useStyles({ color });

  //Thanks to cx, className will take priority over classes.root 🤩
  return (
    <span
      className={cx(classes.root, className)}
      onClick={() => setColor("blue")}
    >
      hello world
    </span>
  );
};

const useStyles = tss
  .withParams<{ color: "red" | "blue" }>()
  .create(({ myTheme, color }) => ({
    root: {
      cursor: "pointer",
      // The color of the text is red or blue depending on the state of the component
      color,
      // When mouse is hover, green border
      "&:hover": {
        border: `4px solid ${myTheme.primaryColor}`,
      },
      // On big screen, a big black border
      "@media (min-width:48em)": {
        border: "10px solid black",
      },
    },
  }));
