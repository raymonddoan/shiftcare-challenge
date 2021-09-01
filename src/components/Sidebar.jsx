import React from "react";

const Sidebar = ({ coaches, setSelectedCoach }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
    setSelectedCoach(e.target.value);
  };

  return (
    <div>
      <h2>Available Coaches</h2>
      {coaches.map((coach, i) => (
        <button key={i} onClick={(e) => handleClick(e)} value={coach}>
          {coach}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
