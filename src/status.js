import React from "react";

const statusBar = (props) => {
    const{ bgcolor, barcolor } = props;

    const containerBox = {
        height: 20,
        width: "90%",
        backgroundColor: "#000",
        borderRadius: 50,
        opacity: 0.7,
        padding: 5,
        marginTop: 10,
        marginBottom: 10
    }

    const Filler = {
        height: "100%",
        width: `${barcolor}%`,
        backgroundColor: bgcolor,
        transition: 'width 1s ease-in-out',
        borderRadius: "inherit",
        textAlign: "right"
    }

    const Label = {
        color : "#FF6FA0",
        fontWeight: "bold",
    }


    return(
      <div style={containerBox}>
        <div style={Filler}>
          <span style={Label}>{`${barcolor}%`}</span>
        </div>
      </div>
    );
  };
  
  export default statusBar;