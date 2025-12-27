import { PrimaryButton } from "./components/PrimaryButton";
import { User } from "./components/users/User";
import { UserProfile } from "./components/users/userProfile";


export const App = () => {
  return (
    <div>
      <h1>Hello world</h1>

      <PrimaryButton actionType="deleted"></PrimaryButton>
      <UserProfile></UserProfile>
      <User name="Jane Doe" email="jane.doe@example.com"></User>

    </div>
  );
};
