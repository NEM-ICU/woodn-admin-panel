import { Badge } from "@mui/material";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>woodn.</Logo>
        </Left>
        <Right>
          <IconContainer>
            <Badge badgeContent={4} color="error">
              <NotificationsNone />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Badge badgeContent={4} color="error">
              <Language />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Badge badgeContent={0} color="error">
              <Settings />
            </Badge>
          </IconContainer>
          <Profile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYKlZMPJhrzwUBO69BLgkaZGqUu_he5E1Kw&usqp=CAU" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TopBar;
