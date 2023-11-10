import {
  AttachMoneyOutlined,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PersonOutline,
  Report,
  StorefrontOutlined,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "rgb(240, 240, 255)" : "")};

  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

const ChangedLineStyle = styled(LineStyle)`
  margin-right: 5px;
  font-size: 20px !important;
`;

const ChangedTimeline = styled(Timeline)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedTrendingUp = styled(TrendingUp)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedAttachMoneyOutlined = styled(AttachMoneyOutlined)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedChatBubbleOutline = styled(ChatBubbleOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedDynamicFeed = styled(DynamicFeed)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedPersonOutline = styled(PersonOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedStorefrontOutlined = styled(StorefrontOutlined)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedMailOutline = styled(MailOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedWorkOutline = styled(WorkOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`;
const ChangedReport = styled(Report)`
  margin-right: 5px;
  font-size: 20px !important;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        {/* side bar menu 1 */}
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/">
              <SidebarListItem>
                <ChangedLineStyle />
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <ChangedTimeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <ChangedTrendingUp />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        {/* side bar menu 2 */}
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <Link to="/users">
              <SidebarListItem>
                <ChangedPersonOutline />
                Users
              </SidebarListItem>
            </Link>
            <Link to="products">
              <SidebarListItem>
                <ChangedStorefrontOutlined />
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <ChangedAttachMoneyOutlined />
              Transactions
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        {/* side bar menu 3 */}
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <ChangedMailOutline />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <ChangedDynamicFeed />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChangedChatBubbleOutline />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        {/* side bar menu 4 */}
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <ChangedWorkOutline />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <ChangedTimeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <ChangedReport />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
