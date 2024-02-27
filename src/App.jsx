// import { useState } from "react";
// import "./App.css"

// function App() {
//   const [color, setColor] = useState('olive')

//   return (
//     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
//       <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center h-full gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//             onClick={() => setColor("red")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
//             style={{ backgroundColor: "red" }}
//           >
//             Red
//           </button>
//           <button
//             onClick={() => setColor("blue")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
//             style={{ backgroundColor: "blue" }}
//           >
//             Blue
//           </button>
//           <button
//             onClick={() => setColor("pink")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
//             style={{ backgroundColor: "pink" }}
//           >
//             Pink
//           </button>
//           <button
//             onClick={() => setColor("orange")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
//             style={{ backgroundColor: "orange" }}
//           >
//             Orange
//           </button>
//           <button
//             onClick={() => setColor("black")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
//             style={{ backgroundColor: "black" }}
//           >
//             Black
//           </button>
//           <button
//             onClick={() => setColor("purple")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
//             style={{ backgroundColor: "purple" }}
//           >
//             Purple
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import "./App.css";

// function App() {
//   console.log('clicked')
//   // eslint-disable-next-line no-unused-vars
// const [color, setColor] = useState('olive');

//   const handleButtonClick = (newColor) => {
//     console.log("button clicked")
//     setColor(newColor);
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <button onClick={() => handleButtonClick("red")} className="button red">
//           Red
//         </button>
//         <button onClick={() => handleButtonClick("blue")} className="button blue">
//           Blue
//         </button>
//         {/* Add more buttons with different colors */}
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="full-screen w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="container mx-auto"></div>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center h-full gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;






