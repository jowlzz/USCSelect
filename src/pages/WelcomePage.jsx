import { Box, Button, Text } from "@chakra-ui/react";
import WelcomePageBg from "../atoms/WelcomePageBg";

const WelcomePage = () => {
	return (
		<Box mx="20" mt="10">
			<Box
				position="fixed"
				top="0"
				left="0"
				width="100%"
				height="100%"
				zIndex="-1"
				backgroundSize="cover"
			>
				<WelcomePageBg />
			</Box>

			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				height="80vh"
			>
				<Text fontSize={48} fontWeight="extrabold" marginBottom={10}>
					Are you ready to vote?
				</Text>
				<Button
					backgroundColor="#1E7817"
					color="white"
					fontWeight="extrabold"
					fontSize={35}
					padding="10"
					width={275}
					_hover={{
						backgroundColor: "#1E7817",
					}}
				>
					VOTE NOW
				</Button>
			</Box>
		</Box>
	);
};

export default WelcomePage;
