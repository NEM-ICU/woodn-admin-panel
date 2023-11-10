import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";

const Container = styled.div`
  display: flex;
`;

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/product/create-product" element={<CreateProduct />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

function Root() {
  return (
    <>
      <TopBar />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
