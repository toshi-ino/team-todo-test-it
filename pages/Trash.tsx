import { useState } from "react";

import {
	DeleteIcon,
	EditIcon,
	ExternalLinkIcon,
	SearchIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";

import {
	Center,
	Container,
	Flex,
	HStack,
	Spacer,
	Stack,
	Text,
	VStack,
	InputGroup,
	InputRightElement,
	Input,
	Select,
	IconButton,
	TableContainer,
	Tr,
	Thead,
	Table,
	Th,
	Button,
	Td,
	Tbody,
	ButtonProps,
} from "@chakra-ui/react";

import { Layout } from "../components/Layout";

import {
	Paginator,
	Previous,
	Next,
	PageGroup,
	usePaginator,
} from "chakra-paginator";

const Trash = () => {
	const pagesQuantity = 5;
	const { currentPage, setCurrentPage } = usePaginator({
		initialState: { currentPage: 1 },
	});

	const normalStyles: ButtonProps = {
		w: "40px",
		fontSize: "sm",
		_hover: {
			bg: "green.300",
		},
	};

	const activeStyles: ButtonProps = {
		w: "40px",
		fontSize: "sm",
		_hover: {
			bg: "green.300",
		},
	};

	const separatorStyles: ButtonProps = {
		w: 7,
		bg: "green.200",
	};
	return (
		<Layout title="Trash">
			<Container>
				<Center>
					<VStack>
						<Flex w={`1080px`} mb={`33px`}>
							<Stack>
								<Text
									fontSize="28px"
									fontWeight="bold"
									lineHeight="33px"
									color="blackAlpha.800"
									mb={`15px`}>
									TRASH
								</Text>
								<Flex>
									<Button
										color={`blackAlpha.800`}
										variant={`outline`}
										bgColor={`red.500`}
										w={`112px`}
										h={`40px`}
										borderRadius={`3xl`}
										borderColor={`black.800`}
										fontSize={`18px`}
										fontFamily={`roboto`}
										fontWeight={`bold`}
										ml={`24px`}>
										Delete all
									</Button>
									<Button
										color={`blackAlpha.800`}
										variant={`outline`}
										bgColor={`blue.300`}
										w={`112px`}
										h={`40px`}
										borderRadius={`3xl`}
										borderColor={`black.800`}
										fontSize={`18px`}
										fontFamily={`roboto`}
										fontWeight={`bold`}
										ml={`24px`}>
										Resotre all
									</Button>
									<Button
										color={`blackAlpha.800`}
										variant={`outline`}
										bgColor={`green.300`}
										w={`112px`}
										h={`40px`}
										borderRadius={`3xl`}
										borderColor={`black.800`}
										fontSize={`18px`}
										fontFamily={`roboto`}
										fontWeight={`bold`}
										ml={`24px`}>
										Back
									</Button>
								</Flex>
							</Stack>
						</Flex>
						<TableContainer w={`1080px`}>
							<Table variant="simple" mb={`16px`}>
								<Thead bgColor={`green.300`}>
									<Tr>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Task
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Status
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Priority
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Create
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Update
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Action
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td fontWeight={`bold`} w={`384px`}>
											Github
										</Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.50`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}
												fontSize={`12px`}
												fontWeight={`bold`}
												fontFamily={`roboto`}
												p={`0`}>
												{/* {buttonOne} */}
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}></Td>
										<Td w={`139.2px`}>2020-11-8 18:55</Td>
										<Td w={`139.2px`}>2020-11-8 18:55</Td>
										<Td w={`139.2px`}>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td fontWeight={`bold`}>React Todo</Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}></Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td fontWeight={`bold`}>Firebase Hosting</Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.300`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DONE
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}></Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}></Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.300`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DONE
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}></Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}></Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						<Paginator
							pagesQuantity={pagesQuantity}
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							activeStyles={activeStyles}
							normalStyles={normalStyles}
							separatorStyles={separatorStyles}>
							<Flex
								alignItems={`center`}
								justifyContent={`space-between`}
								w={`352px`}
								p={`12px`}>
								<Previous>
									<ChevronLeftIcon />
								</Previous>
								<PageGroup isInline align={`center`} />
								<Next>
									<ChevronRightIcon />
								</Next>
							</Flex>
						</Paginator>
					</VStack>
				</Center>
			</Container>
		</Layout>
	);
};

export default Trash;
