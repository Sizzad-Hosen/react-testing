// import { PrimaryButton } from "./components/PrimaryButton";
// import { User } from "./components/users/User";
// import { UserProfile } from "./components/users/userProfile";


// export const App = () => {
//   return (
//     <div>
//       <h1>Hello world</h1>

//       <PrimaryButton actionType="deleted"></PrimaryButton>
//       <UserProfile></UserProfile>
//       <User name="Jane Doe" email="jane.doe@example.com"></User>
         
//     </div>
//   );
// };


import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/posts" element={<Posts />} /> */}
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/posts/edit/:id" element={<EditPost />} /> */}
      </Route>

    </Routes>
  );
};

export default App;

