import {
	Stack,
	Box,
	Flex,
	Text,
	Image,
	FormControl,
	Input,
	Button,
	FormLabel,
	InputGroup,
	InputRightElement,
	useBreakpointValue,
	HStack,
	Divider,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../atoms/Slider1";
import USCLogo from "../atoms/usclogo.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsGoogle } from "react-icons/bs";

import { useState } from "react";
const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleInputChange = (e) => {
		if (e.target.id === "email") {
			setEmail(e.target.value);
		} else if (e.target.id === "password") {
			setPassword(e.target.value);
		}
	};

	const isSliderVisible = useBreakpointValue({
		base: false,
		sm: false,
		md: true,
		lg: true,
		xl: true,
	});

	return (
		<Flex>
			{isSliderVisible && (
				<Box width="60%">
					<LoginSlider />
				</Box>
			)}
			<Box width="40%">
				<Stack
					direction="column"
					marginTop={10}
					justifyContent="center"
					alignItems="center"
				>
					<Image src={USCLogo} width={200} height={245} />

					<Stack direction="column" width={500} gap={5} marginTop={8}>
						<FormControl>
							<FormLabel
								htmlFor="email"
								fontWeight="bold"
								fontSize={20}
							>
								Name
							</FormLabel>
							<Input id="email" type="email" height={20} />
						</FormControl>
						<FormControl>
							<FormLabel
								htmlFor="email"
								fontWeight="bold"
								fontSize={20}
							>
								ID Number
							</FormLabel>
							<Input id="email" type="email" height={20} />
						</FormControl>
						<FormControl>
							<FormLabel
								htmlFor="email"
								fontWeight="bold"
								fontSize={20}
							>
								Password
							</FormLabel>
							<InputGroup>
								<Input
									type={showPassword ? "text" : "password"}
									id="password"
									value={password}
									onChange={handleInputChange}
									height={20}
								/>
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() =>
											setShowPassword(
												(showPassword) => !showPassword
											)
										}
									>
										{showPassword ? (
											<ViewIcon />
										) : (
											<ViewOffIcon />
										)}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
					</Stack>
				</Stack>
				<Button
					variant="text"
					size="sm"
					marginLeft={40}
					marginTop={3}
					marginBottom={3}
				>
					Forgot password?
				</Button>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
				>
					<Button width="60%">Login</Button>
					<Text color="fg.muted">Register as Admin? Sign Up</Text>
					<HStack>
						<Divider />
						<Text
							textStyle="sm"
							whiteSpace="nowrap"
							color="fg.muted"
						>
							or continue with
						</Text>
						<Divider />
					</HStack>
					<Button
						width="60%"
						display="flex"
						gap={2}
						backgroundColor="#1E7817"
						color="white"
						paddingTop={6}
						paddingBottom={6}
						_hover={{
							backgroundColor: "#1E7817",
						}}
					>
						<BsGoogle />
						Continue with Google
					</Button>
				</Stack>
			</Box>
		</Flex>
	);
};

export default Login;

const LoginSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			<Slider1 />
		</Slider>
	);
};
