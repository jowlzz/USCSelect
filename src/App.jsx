<<<<<<< Updated upstream
import { useState } from "react";
import WelcomePg from "./pages/WelcomePage";

function App() {
  const [count, setCount] = useState(0);

  return <>{/* <WelcomePg/> */}</>;
=======
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidates from "./pages/Candidates";
import LoginPage from "./pages/Login";
import RegisterAccount from "./pages/Registration";

function App() {
	return (
		<ChakraProvider>
			<CSSReset />

			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterAccount />} />
					<Route path="/candidates" element={<Candidates />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
>>>>>>> Stashed changes
}

export default App;