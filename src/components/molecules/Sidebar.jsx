import React, { useCallback, useEffect } from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Sidebar = (props) => {
  const { availabilities, coaches, setCoaches, setSelectedCoach } = props;

  const getCoaches = useCallback(() => {
    let coachesArray = [];
    availabilities.forEach((availability) => {
      if (!coachesArray.includes(availability.extendedProps.name)) {
        coachesArray.push(availability.extendedProps.name);
      }
    });
    setCoaches(coachesArray);
  }, [availabilities, setCoaches]);

  useEffect(() => {
    getCoaches();
  }, [getCoaches]);

  const handleClick = (e) => {
    console.log(e.target.value);
    setSelectedCoach(e.target.value);
  };

  return (
    <StyledSidebar>
      <h2>Available Coaches</h2>
        {coaches.map((coach, i) => (
          <Button key={i} onClick={(e) => handleClick(e)} value={coach}>
            {coach}
          </Button>
        ))}
      <div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
