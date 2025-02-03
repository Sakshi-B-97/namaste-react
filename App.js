//const heading= React.createElement("h1",{id:"heading"},"Hello Ankit Darling");
//const heading2= React.createElement("h2",{id:"heading2"},"Hello Ankit Darling2");
// const parent=React.createElement("div",{id:"parent"},
//   [ React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"I am h1 tag"),
//     React.createElement("h2",{},"I am h2 tag")
    
//     ]),  
//       React.createElement("div",{id:"child2"},
//       [React.createElement("h1",{},"I am h1 tag"),
//       React.createElement("h2",{},"I am h2 tag")
      
//       ])]

// );

const heading=React.createElement("h1",{id:"heading"},"Hey baby");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// root.render(
//     React.createElement(
//       React.Fragment,
//       null,
//       heading,
//       heading2
//     )
// );