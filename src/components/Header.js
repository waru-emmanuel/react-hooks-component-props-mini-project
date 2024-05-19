import React from "react";


function Header({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      {/* <h1> with the name of the blog, passed as a prop called name */}
    </div>
  );
}
 export default Header;