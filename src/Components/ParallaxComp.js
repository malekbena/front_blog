import React from "react";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


const ParallaxComp = (props) => (
  <div className="mb-5 pb-5" style={styles}>
    <Parallax
      bgImage={props.item.cover}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div style={{
            position: "absolute",
            background: 'rgba(94, 96, 226, 0.8)',
            left: "0",
            top: "0",
            height: "100%",
            width: "100%",
          }}>

          </div>
          <h3
            style={{
              color: "white",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          > {props.item.title} </h3>
        </div>
      )}
      

    >
      <div style={{ height: "200px" }}>
      </div>
    </Parallax>
  </div>
);

export default ParallaxComp