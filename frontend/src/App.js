import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListScreen from "./screens/UserListScreen";
import CourseListScreen from "./screens/CourseListScreen";
import CourseEditScreen from "./screens/CourseEditScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="6"
        px="6"
        bgColor="gray.200"
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/admin/userlist" element={<UserListScreen />} />
          <Route path="/admin/productlist" element={<CourseListScreen />} />
          <Route
            path="/admin/product/:id/edit"
            element={<CourseEditScreen />}
          />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};

export default App;
