import { Visibility } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContBox = styled.div`
  display: flex;
`;

const UserName = styled.span`
  font-weight: 500;
`;

const UserJobTitle = styled.span`
  font-weight: 300;
`;

const DisplayUserButtonCont = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const ChangedVisibility = styled(Visibility)`
  font-size: 16px !important;
  margin-right: 5px;
`;

const WidgetSm = () => {
  return (
    <Container>
      <Title>New Customers</Title>
      <List>
        {/* User 1 */}
        <ListItem>
          <UserContBox>
            <UserImage src="https://media.self.com/photos/5bd739c5249cb62cfc5989fb/4:3/w_2560%2Cc_limit/Ola-Ojewumi-2.jpg" />
            <UserContainer>
              <UserName>Anna Keller</UserName>
              <UserJobTitle>Software Engineer</UserJobTitle>
            </UserContainer>
          </UserContBox>
          <DisplayUserButtonCont>
            <Button>
              <ChangedVisibility />
              Display
            </Button>
          </DisplayUserButtonCont>
        </ListItem>

        {/* User 2 */}
        <ListItem>
          <UserContBox>
            <UserImage src="https://media.self.com/photos/5bd739c5249cb62cfc5989fb/4:3/w_2560%2Cc_limit/Ola-Ojewumi-2.jpg" />
            <UserContainer>
              <UserName>Anna Keller</UserName>
              <UserJobTitle>Software Engineer</UserJobTitle>
            </UserContainer>
          </UserContBox>
          <DisplayUserButtonCont>
            <Button>
              <ChangedVisibility />
              Display
            </Button>
          </DisplayUserButtonCont>
        </ListItem>

        {/* User 3 */}
        <ListItem>
          <UserContBox>
            <UserImage src="https://media.self.com/photos/5bd739c5249cb62cfc5989fb/4:3/w_2560%2Cc_limit/Ola-Ojewumi-2.jpg" />
            <UserContainer>
              <UserName>Anna Keller</UserName>
              <UserJobTitle>Software Engineer</UserJobTitle>
            </UserContainer>
          </UserContBox>
          <DisplayUserButtonCont>
            <Button>
              <ChangedVisibility />
              Display
            </Button>
          </DisplayUserButtonCont>
        </ListItem>

        {/* User 4 */}
        <ListItem>
          <UserContBox>
            <UserImage src="https://media.self.com/photos/5bd739c5249cb62cfc5989fb/4:3/w_2560%2Cc_limit/Ola-Ojewumi-2.jpg" />
            <UserContainer>
              <UserName>Anna Keller</UserName>
              <UserJobTitle>Software Engineer</UserJobTitle>
            </UserContainer>
          </UserContBox>
          <DisplayUserButtonCont>
            <Button>
              <ChangedVisibility />
              Display
            </Button>
          </DisplayUserButtonCont>
        </ListItem>

        {/* User 5 */}
        <ListItem>
          <UserContBox>
            <UserImage src="https://media.self.com/photos/5bd739c5249cb62cfc5989fb/4:3/w_2560%2Cc_limit/Ola-Ojewumi-2.jpg" />
            <UserContainer>
              <UserName>Anna Keller</UserName>
              <UserJobTitle>Software Engineer</UserJobTitle>
            </UserContainer>
          </UserContBox>
          <DisplayUserButtonCont>
            <Button>
              <ChangedVisibility />
              Display
            </Button>
          </DisplayUserButtonCont>
        </ListItem>
      </List>
    </Container>
  );
};

export default WidgetSm;
