import { Box } from "@mui/material";

interface PropsTab {
  value: string;
  index: string;
  children?: React.ReactNode;
}

const TabPanel = (props: PropsTab) => {
  return (
    <>
      {props.value == props.index ? (
        <Box
          sx={{
            paddingTop: "5px",
            paddingLeft: "5px",
            display: "flex",
            gap: "5px",
          }}
        >
          {props.children}
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default TabPanel;
