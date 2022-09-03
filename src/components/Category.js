import { Container, Grid } from "@mui/material";
import React from "react";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Category = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <List>
            <FromList to="/cuisine/italian">
              <FaPizzaSlice className="svgs" />
              <h4 className="hfor">Italian</h4>
            </FromList>
            <FromList to="/cuisine/american">
              <FaHamburger className="svgs" />
              <h4 className="hfor">American</h4>
            </FromList>
            <FromList to="/cuisine/thai">
              <GiNoodles className="svgs" />
              <h4 className="hfor">Thai food</h4>
            </FromList>
            <FromList to="/cuisine/Japanese">
              <GiChopsticks className="svgs" />
              <h4 className="hfor">Japanese</h4>
            </FromList>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
  margin-bottom: 7rem;
  gap: 20px;
  width: 100%;
`;

const FromList = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: #eebc1d;
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    .hfor {
      margin-top: 5px;
      font-size: 12px;
    }
    .svgs {
      width: 50px;
      height: 20px;
    }
  }
  @media (max-width: 380px) {
    width: 50px;
    height: 50px;
    .hfor {
      margin-top: 1px;
      font-size: 9px;
    }
    .svgs {
      width: 40px;
      height: 17px;
    }
  }
  h4 {
    color: #f9fafa;
    margin-top: 7px;
  }
  svg {
    width: 100px;
    height: 40px;
  }
`;

export default Category;
