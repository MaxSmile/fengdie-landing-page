import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Papilio</span>
          </a>
          <span>Mobile website building platform</span>
        </h1>
      </div>
    </header>
  );
}
