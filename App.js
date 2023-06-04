import { useState } from "react";
import { PostsScreen, RegistrationScreen } from "./src/screens";

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  return isLogIn ? <PostsScreen /> : <RegistrationScreen />;
}
