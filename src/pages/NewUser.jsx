import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;

const NewUserTitle = styled.h1``;

const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const NewUserItem = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const NULabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(150, 150, 150);
`;

const NUInput = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const GenderCont = styled.div``;

const NURadioLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;

const NURadioInput = styled.input`
  margin-top: 15px;
`;

const ActiveSelect = styled.select`
  height: 40px;
  border-radius: 5px;
  color: #555;
`;

const ActiveOption = styled.option`
  font-size: 18px;
`;

const SubmitBtn = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <NULabel>Username</NULabel>
          <NUInput placeholder="john" />
        </NewUserItem>
        <NewUserItem>
          <NULabel>Full Name</NULabel>
          <NUInput placeholder="john Snow" />
        </NewUserItem>
        <NewUserItem>
          <NULabel>Email</NULabel>
          <NUInput type="email" placeholder="johm@gmail.com" />
        </NewUserItem>
        <NewUserItem>
          <NULabel>Password</NULabel>
          <NUInput type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <NULabel>Phone</NULabel>
          <NUInput type="text" placeholder="+ 123 456 789" />
        </NewUserItem>
        <NewUserItem>
          <NULabel>Address</NULabel>
          <NUInput type="password" placeholder="New York | USA" />
        </NewUserItem>
        <NewUserItem>
          <NULabel>Gender</NULabel>
          <GenderCont>
            <NURadioInput type="radio" id="male" value="male" />
            <NURadioLabel>Male</NURadioLabel>
            <NURadioInput type="radio" id="female" value="female" />
            <NURadioLabel>Female</NURadioLabel>
            <NURadioInput type="radio" id="other" value="other" />
            <NURadioLabel>Other</NURadioLabel>
          </GenderCont>
        </NewUserItem>
        <NewUserItem>
          <NULabel>Active</NULabel>
          <ActiveSelect>
            <ActiveOption>Yes</ActiveOption>
            <ActiveOption>No</ActiveOption>
          </ActiveSelect>
        </NewUserItem>
        <SubmitBtn>Create</SubmitBtn>
      </NewUserForm>
    </Container>
  );
};

export default NewUser;
