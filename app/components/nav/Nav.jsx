import React from "react";
import SearchBar from "./SearchBar.jsx";
import SignInButton from "./SignInButton.jsx";

const Nav = () => {
  return (
    <section className="flex justify-between p-5">
      <h1>Queer-iocity</h1>
      <div className="flex">
        <SearchBar />
        <SignInButton />
      </div>
    </section>
  );
};

export default Nav;
