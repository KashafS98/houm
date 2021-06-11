import React, { useState } from "react";
import styled from "styled-components";
import plus from '../assets/plus.svg'
import { white } from "../utils/colors";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
`;

const Wrap = styled.div`
  background: ${white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin: 1%;
  height: 120px;
  rgba(0,0,0,0.1) 1px 1px 20px -10px;
  h6 {
    padding: 3rem;
  }

  img {
    margin-right: 3rem;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    
  }
`;

const Dropdown = styled.div`
  background: transparent;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  margin: 3%;
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
      <AccordionSection>
        <Container>
          {data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h6>{item.title}</h6>
                  <img src={plus} alt=''/>
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
  );
};

export default Accordion;