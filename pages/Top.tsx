import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { DeleteIcon, EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Button,
	Center,
	Container,
	Flex,
	Spacer,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";

const Top: NextPage = () => {
	return (
		<Layout title="TOP">
			<Container mt={`16px`}>
				<Center>
					<VStack>
						<Flex w={`1080px`}>
							<Text
								fontSize="28px"
								fontWeight="bold"
								lineHeight="33px"
								color="blackAlpha.800">
								TODO LIST
							</Text>
							<Spacer />
							<Stack
								mt={`16px`}
								spacing={`16px`}
								direction="row"
								align="center">
								<Button
									bgColor="yellow.300"
									h={`40px`}
									w={`40px`}
									borderRadius={`full`}
									variant={`outline`}
									borderColor={`gray.400`}>
									<DeleteIcon />
								</Button>
								<Button
									bgColor="pink.100"
									h={`40px`}
									w={`40px`}
									borderRadius={`full`}
									variant={`outline`}
									borderColor={`gray.400`}>
									<EditIcon />
								</Button>
								<Button
									bgColor="green.300"
									h={`40px`}
									w={`40px`}
									borderRadius={`full`}
									variant={`outline`}
									borderColor={`gray.400`}>
									<ExternalLinkIcon />
								</Button>
							</Stack>
						</Flex>
					</VStack>
				</Center>
			</Container>
		</Layout>
	);
};

export default Top;
