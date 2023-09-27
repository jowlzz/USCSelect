import {
	Avatar,
	Box,
	Button,
	Grid,
	GridItem,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	Image,
} from "@chakra-ui/react";

import CandidatesBg from "../atoms/CandidatesBg";

const Candidates = () => {
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
				<CandidatesBg />
			</Box>

			<Box position="relative">
				<Grid templateColumns="repeat(3, 1fr)" gap={6}>
					<GridItem w="100%" padding={0}>
						<Image
							src={
								"https://1000logos.net/wp-content/uploads/2018/08/University-of-San-Carlos-Logo-500x281.png"
							}
							width={200}
							height={50}
							objectFit="cover"
						/>
					</GridItem>
					<GridItem w="100%">
						<Stack
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							fontWeight="extrabold"
							fontSize={35}
							color="#134D0F"
						>
							<Text>VOTE WISELY!</Text>
							<Text>LET YOUR VOICE BE HEARD</Text>
						</Stack>
					</GridItem>
					<GridItem
						w="100%"
						display="flex"
						flexDirection="row"
						justifyContent="flex-end"
					>
						<Popover>
							<PopoverTrigger>
								<Button
									backgroundColor="#1E7817"
									border="2px solid #FEC146"
									color="white"
									size="lg"
									_hover={{
										backgroundColor: "#1E7817",
									}}
								>
									<Avatar size="sm" />
									<Text marginLeft={3}>Jane Doe</Text>
								</Button>
							</PopoverTrigger>
							<PopoverContent
								width={210}
								backgroundColor="#1E7817"
								padding={3}
								border="2px solid #FEC146"
							>
								<Stack
									direction="column"
									alignItems="center"
									color="white"
								>
									<Avatar size="md" />
									<Text fontSize={14} fontWeight="extrabold">
										JANE DOE
									</Text>
									<Text fontSize={16} fontWeight="semibold">
										BS - Computer Science
									</Text>
									<Text fontSize={11}>
										School of Arts and Sciences
									</Text>
								</Stack>
							</PopoverContent>
						</Popover>
					</GridItem>
				</Grid>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					paddingTop={10}
				>
					<Stack
						display="flex"
						flexDirection="row"
						alignItems="center"
						gap={6}
						fontWeight="extrabold"
						textAlign="center"
						fontSize={30}
					>
						<Box
							py={3}
							width={290}
							borderRadius={5}
							style={{ border: "3px solid #134D0F" }}
						>
							President
						</Box>
						<Box
							py={3}
							width={290}
							borderRadius={5}
							style={{ border: "3px solid #134D0F" }}
						>
							Vice-President
						</Box>
						<Box
							py={3}
							width={290}
							borderRadius={5}
							style={{ border: "3px solid #134D0F" }}
						>
							Councilors
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default Candidates;