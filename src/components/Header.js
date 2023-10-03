import React from 'react';


const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <p>Logo</p>
          </a>
          {/* button */}
          <button className="btn btn-sm" data-text="Work with me"/>
        </div>
      </div>
    </header>
  );
};

export default Header;