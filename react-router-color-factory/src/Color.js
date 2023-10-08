// import React from "react";
// import { Link } from "react-router-dom";
// import "./Color.css";

// function Color({ colorName, hex }) {
//   return (
//     <div className="Color" style={{ backgroundColor: hex }}>
//       <p>This is {colorName}.</p>
//       <p>Isn't it beautiful?</p>
//       <p>
//         <Link to="/">Go back</Link>
//       </p>
//     </div>
//   );
// }

// export default Color;

import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {
  // Get the color parameter from the URL
  const { color } = useParams();

  // Check if the selected color exists in your colors state
  if (colors[color]) {
    // Set the background color based on the selected color
    const backgroundColor = colors[color];

    // Style object for the background color
    const containerStyle = {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: backgroundColor, // Set the background color here
    };

    return (
      <div className="Color" style={containerStyle}>
        <p>This is {color}.</p>
        <p>Isn't it beautiful?</p>
        <p>
          <Link to="/colors">Go back</Link>
        </p>
      </div>
    );
  } else {
    // Handle the case where the selected color doesn't exist
    return <div>Color not found</div>;
  }
}

export default Color;

