import Board from "../components/Layout/Board";
import Header from "../components/Header/Header";
import WhiteBoard from "../components/Layout/WhiteBoard";
import Footer from "../components/Footer/Footer";

import { Typography } from "@mui/material";

export default function AboutusPage() {
  return (
    <>
      <Board>
        <Header />
        <WhiteBoard>
          <Typography
            textAlign={"left"}
            fontSize={"50px"}
            textTransform={"uppercase"}
            color={"black"}
          >
            About us
          </Typography>
          <div style={{ display: "flex", marginTop: "1rem" }}>
            <div
              style={{
                paddingRight: "2rem",
                clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
              }}
            >
              <img src="../demo.jpeg" style={{ width: "100%" }} />
            </div>
            <div>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                This is a website created by me, Felipe Cruz, during my work
                vacation.
              </Typography>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                Since the beginning of 2023, I started studying drawing, and it
                was during this time that I found Marc Brunet's Art School
                YouTube channel.
              </Typography>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                In one of his first videos of the year, he proposed a study
                routine to improve drawing through various types of exercises,
                with gestural drawing being the most repeated.
              </Typography>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                Before this app, I used to create a file in my image editor and
                search for references, which generated several junk files, or I
                simply didn't save them to avoid clutter. That's when I had the
                idea of creating an application that would gather this drawing
                history and organize it.
              </Typography>
              <Typography
                textAlign={"justify"}
                lineHeight={1.7}
                fontSize={"18px"}
                color={"black"}
              >
                The application is still under development, and I plan to add
                some other features to improve performance and portability for
                tablets and phones.
              </Typography>
            </div>
          </div>
        </WhiteBoard>
        <Footer />
      </Board>
    </>
  );
}
