import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styled from "styled-components";

export const Navbar = styled(AppBar)`
  height: 10vh;
  font-size: 20px;
  line-height: 40px;
  position: relative;
`;

export const Container = styled(Toolbar)`
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: var(--primary-bg);
  color: var(--primary-text);
`;

export const Picture = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 3px;
  margin-left: -1vh;
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
`;

export const Name = styled.div`
  line-height: 56px;
  margin-left: 1vh;
`;