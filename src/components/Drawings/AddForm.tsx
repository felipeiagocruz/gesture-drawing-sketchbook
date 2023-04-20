import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import classes from "./AddForm.module.css";
import { Typography } from "@mui/material";

import { Button } from "@mui/material";

interface InputChangeEvent {
  target: HTMLInputElement;
}
interface PropsAddForm {
  children?: React.ReactNode;
  add: () => void;
  setReference: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  name: string;
  reference: string;
}
const AddForm = (props: PropsAddForm) => {
  const [previewImg, setPreviewImg] = useState<string>();

  const handleReferenceChange = (event: InputChangeEvent) => {
    setPreviewImg(event.target.value);
  };

  return (
    <>
      <Typography
        textAlign={"left"}
        fontSize={"26px"}
        textTransform={"uppercase"}
        color={"black"}
      >
        Add a new drawing
      </Typography>
      <form className={classes.form}>
        <label id="name">
          <Typography textAlign={"left"} fontSize={"16px"} color={"black"}>
            Name:
          </Typography>
        </label>
        <input
          id="name"
          type="text"
          onChange={(e: InputChangeEvent) => {
            props.setName(e.target.value);
          }}
        ></input>
        <label id="reference">
          <Typography textAlign={"left"} fontSize={"16px"} color={"black"}>
            Reference:
          </Typography>
        </label>
        <input
          id="reference"
          type="text"
          onChange={(e: InputChangeEvent) => {
            props.setReference(e.target.value);
          }}
        ></input>
        <Button variant="contained" onClick={props.add}>
          Save
        </Button>
      </form>
      <div
        className={classes.preview}
        style={{
          backgroundImage: `url(${
            props.reference
              ? props.reference
              : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          })`,
        }}
      ></div>
    </>
  );
};

export default AddForm;
