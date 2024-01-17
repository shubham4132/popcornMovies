import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />;
//       <p>This movie was Rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      size={24}
      color="green"
      message={["terrible", "bad", "okay", "good", "Excellent"]}
    />
    <StarRating maxRating={10} defaultRating={3} />
    <StarRating maxRating={10} size={24} color="red" />
    <Test /> */}
  </React.StrictMode>
);
