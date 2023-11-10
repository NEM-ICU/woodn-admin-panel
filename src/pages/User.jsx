import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import styled from "styled-components";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1``;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UsernameTop = styled.span`
  font-weight: 600;
`;

const UserTopCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const UserJobTitle = styled.span`
  font-weight: 300;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;

const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: lightgray;
  color: rgb(175, 170, 170);
`;

const UserShowInfoCont = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

const ChangedPermIdentity = styled(PermIdentity)`
  font-size: 16px !important;
`;

const ChangedCalendarToday = styled(CalendarToday)`
  font-size: 16px !important;
`;
const ChangedPhoneAndroid = styled(PhoneAndroid)`
  font-size: 16px !important;
`;
const ChangedMailOutline = styled(MailOutline)`
  font-size: 16px !important;
`;
const ChangedLocationSearching = styled(LocationSearching)`
  font-size: 16px !important;
`;

const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UserUpdateLeftCont = styled.div``;

const UserUpdateLeftItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const UULeftLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const UULeftInput = styled.input`
  border: none;
  width: 300px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

const UserUpdateRightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 700;
`;

const UserUpdateImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const UserImageFile = styled.input`
  display: none;
`;
const ChangedPublish = styled(Publish)`
  cursor: pointer;
`;

const User = () => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };

  return (
    <Container>
      {/* Page Title */}
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/new-user">
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      {/* Container */}
      <UserContainer>
        {/* First Container Box */}

        <UserShow>
          <UserShowTop>
            <UserImage src="https://i.pinimg.com/236x/b8/de/16/b8de166ec98456019db9c10fbcda436b.jpg" />
            <UserTopCont>
              <UsernameTop>Anna Backer</UsernameTop>
              <UserJobTitle>Software Engineer</UserJobTitle>
            </UserTopCont>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfoCont>
              <ChangedPermIdentity />
              <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
            </UserShowInfoCont>
            <UserShowInfoCont>
              <ChangedCalendarToday />
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfoCont>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfoCont>
              <ChangedPhoneAndroid />
              <UserShowInfoTitle>+ 1 123 456 77</UserShowInfoTitle>
            </UserShowInfoCont>
            <UserShowInfoCont>
              <ChangedMailOutline />
              <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
            </UserShowInfoCont>
            <UserShowInfoCont>
              <ChangedLocationSearching />
              <UserShowInfoTitle>New Your | USA</UserShowInfoTitle>
            </UserShowInfoCont>
          </UserShowBottom>
        </UserShow>

        {/* Second Continer Box */}

        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            {/* Left Container */}
            <UserUpdateLeftCont>
              <UserUpdateLeftItem>
                <UULeftLabel>Username</UULeftLabel>
                <UULeftInput placeholder="annabeck99" />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <UULeftLabel>Full Name</UULeftLabel>
                <UULeftInput placeholder="anna beck" />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <UULeftLabel>Email</UULeftLabel>
                <UULeftInput placeholder="annabeck99@gmail.com" />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <UULeftLabel>Phone</UULeftLabel>
                <UULeftInput placeholder="+1 123 456 77" />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <UULeftLabel>Address</UULeftLabel>
                <UULeftInput placeholder="New York | USA" />
              </UserUpdateLeftItem>
            </UserUpdateLeftCont>

            {/* Right Container */}
            <UserUpdateRightCont>
              <UserUpdateUpload>
                <UserUpdateImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMI9NEMEjKdLzir6gnz1KLl2c5RDhcEjo13erm1jghyyVhlZyTQxAbbyYHExuFECKH0E&usqp=CAU" />
                <ChangedPublish onClick={handleIconClick} />
                <UserImageFile
                  type="file"
                  onChange={handleFileChange}
                  ref={inputRef}
                />
              </UserUpdateUpload>
              <UpdateButton>Update</UpdateButton>
            </UserUpdateRightCont>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
