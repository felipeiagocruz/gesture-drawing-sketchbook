import Header from "../src/components/Header/Header";
import classes from "./App.module.css";

import DrawnWorkbench from "./components/Drawings/DrawnWorkbench";
import { Typography, Button } from "@mui/material";

function App() {
  return (
    <>
      <div className={classes.div}>
        <Header />
        <div className={classes.divBackground}>
          <div className={classes.divHeader}>
            <div className={classes.divHeaderText}>
              <Typography
                textAlign={"left"}
                fontSize={"50px"}
                textTransform={"uppercase"}
                color={"black"}
              >
                Gesture Drawing {"&"}
              </Typography>
              <Typography
                textAlign={"left"}
                fontSize={"50px"}
                textTransform={"uppercase"}
                color={"black"}
                paddingBottom={"1rem"}
              >
                Tracing
              </Typography>

              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                The ultimate gesture drawing app for artists and designers!
              </Typography>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                With Gesture Drawing &amp; Tracing, you can easily create
                dynamic and expressive gesture drawings on your device.
              </Typography>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                Gesture drawing is a powerful technique used by artists to
                quickly capture the essence of a subject's movement and form.
                It's a great way to warm up before a longer drawing session, and
                it can help you improve your skills in anatomy, proportion, and
                composition.
              </Typography>

              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                So if you're an artist looking to improve your gesture drawing
                skills, or if you simply want to explore a new way of expressing
                yourself, let's start drawing!
              </Typography>
              <div className={classes.buttonStartNow}>
                <Button
                  variant="contained"
                  sx={{
                    width: 230,
                    height: 90,
                    backgroundColor: "#4dbce9",
                    borderRadius: 50,
                    fontSize: 22,
                  }}
                >
                  Start now!
                </Button>
              </div>
            </div>

            <div className={classes.divHeaderImage}></div>
          </div>

          <div className={classes.divVideo}>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0NYqmhESI-Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>

            <div className={classes.divVideoText}>
              <Typography
                textAlign={"left"}
                fontSize={"50px"}
                textTransform={"uppercase"}
                color={"black"}
              >
                One year plan to learn to drawn
              </Typography>
              <Typography
                textAlign={"left"}
                fontSize={"12px"}
                textTransform={"uppercase"}
                color={"black"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                non. Numquam doloremque at nesciunt eligendi odio dicta
                voluptate dolores accusamus unde voluptas, non ratione, maiores
                consectetur corporis laborum quae delectus? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsum, non. Numquam
                doloremque at nesciunt eligendi odio dicta voluptate dolores
                accusamus unde voluptas, non ratione, maiores consectetur
                corporis laborum quae delectus? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsum, non. Numquam doloremque at
                nesciunt eligendi odio dicta voluptate dolores accusamus unde
                voluptas, non ratione, maiores consectetur corporis laborum quae
                delectus?
              </Typography>
            </div>
          </div>
          <div className={classes.divWorkbench}>
            <Typography
              textAlign={"left"}
              fontSize={"50px"}
              textTransform={"uppercase"}
              color={"black"}
            >
              Let's
            </Typography>
            <Typography
              textAlign={"left"}
              fontSize={"50px"}
              textTransform={"uppercase"}
              color={"black"}
            >
              try it!
            </Typography>

            <DrawnWorkbench />
          </div>
        </div>
        <div className={classes.divBlueSkew}></div>
      </div>
    </>
  );
}

export default App;
