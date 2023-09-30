import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidates from "./pages/Candidates";
import LoginPage from "./pages/Login";
import RegisterAccount from "./pages/Registration";
import WelcomePage from "./pages/WelcomePage";

function App() {
	return (
		<ChakraProvider>
			<CSSReset />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterAccount />} />
					<Route path="/candidates" element={<Candidates />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
