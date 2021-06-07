import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vh;
  background: #fff;
  @media screen and (max-width: 768px) {
    height: 80vh;
  }
`;

const Container = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #008037;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5px;

  h1 {
    padding: 1rem;
    font-size: 1.5rem;
  }

  span {
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    h1 {
      font-size: 1rem;
    }
  }
`;

const Dropdown = styled.div`
  background: transparent;
  color: #000;
  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b43f39;
  padding: 15px;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  margin-bottom: 5px;

  p {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const Accordion = ({data}) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
        <Container>
          {data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.title}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <div className={clicked === index ? "show" : ""}>
                      {item.component}
                    </div>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;