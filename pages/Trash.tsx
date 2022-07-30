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
	Stack,
	Text,
	VStack,
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
									mb={`15px`}
									mt={`16px`}>
									TRASH
								</Text>
								<Flex w={`1080px`} justify={"end"}>
									<Button
										color={`blackAlpha.800`}
										variant={`outline`}
										bgColor={`red.500`}
										w={`112px`}
										h={`40px`}
										borderRadius={`3xl`}
										fontSize={`18px`}
										fontFamily={`roboto`}
										fontWeight={`bold`}>
										Delete all
									</Button>
									<Button
										color={`blackAlpha.800`}
										variant={`outline`}
										bgColor={`blue.300`}
										w={`112px`}
										h={`40px`}
										borderRadius={`3xl`}
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
						<TableContainer w={`1080px`} h={`392px`}>
							<Table variant="simple" mb={`16px`} size={"sm"}>
								<Thead bgColor={`green.300`}>
									<Tr>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}
											w={`384px`}>
											Task
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}
											w={`174px`}>
											Status
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}
											w={`174px`}>
											Priority
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}
											w={`174px`}>
											Create
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}
											w={`174px`}>
											Action
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td fontWeight={`bold`} w={`384px`}></Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
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
												fontFamily={`roboto`}>
												not started
											</Button>
										</Td>
										<Td
											w={`174px`}
											h={`56px`}
											color={`#E53E3E`}
											textAlign={`center`}>
											High
										</Td>
										<Td w={`174px`} h={`56px`}>
											2020-11-8 18:55
										</Td>
										<Td w={`174px`} h={`56px`}>
											<HStack mx={`auto`}>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`red.500`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Delete
												</Button>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`blue.300`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
												{/* <EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} /> */}
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td fontWeight={`bold`} w={`384px`} h={`56px`}>
											React Todo
										</Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
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
										<Td
											w={`174px`}
											h={`56px`}
											color={`#E53E3E`}
											textAlign={`center`}>
											High
										</Td>
										<Td w={`174px`}>2020-11-8 18:55</Td>
										<Td w={`174px`}>
											<HStack mx={`auto`}>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`red.500`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Delete
												</Button>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`blue.300`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
												{/* <EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} /> */}
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td fontWeight={`bold`} w={`384px`}>
											Firebase Hosting
										</Td>
										<Td w={`174px`} textAlign={`center`} h={`56px`}>
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
										<Td
											w={`174px`}
											textAlign={`center`}
											h={`56px`}
											color={`#C6F6D5`}>
											Middle
										</Td>
										<Td w={`174px`}>2020-11-8 18:55</Td>
										<Td w={`174px`}>
											<HStack mx={`auto`}>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`red.500`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Delete
												</Button>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`blue.300`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
												{/* <EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} /> */}
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td w={`384px`}></Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
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
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
											Low
										</Td>
										<Td w={`174px`}>2020-11-8 18:55</Td>
										<Td w={`174px`}>
											<HStack mx={`auto`}>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`red.500`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Delete
												</Button>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`blue.300`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
												{/* <EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} /> */}
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td w={`384px`}></Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
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
										<Td
											w={`174px`}
											textAlign={`center`}
											h={`56px`}
											color={`#C6F6D5`}>
											Middle
										</Td>
										<Td w={`174px`}>2020-11-8 18:55</Td>
										<Td w={`174px`}>
											<HStack mx={`auto`}>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`red.500`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Delete
												</Button>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`blue.300`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
												{/* <EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} /> */}
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td w={`384px`}></Td>
										<Td w={`174px`} textAlign={`center`} h={`56px`}>
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
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
											Low
										</Td>
										<Td w={`174px`}>2020-11-8 18:55</Td>
										<Td w={`174px`}>
											<HStack mx={`auto`}>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`red.500`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Delete
												</Button>
												<Button
													color={`white`}
													variant={`outline`}
													bgColor={`blue.300`}
													w={`80px`}
													h={`40px`}
													borderRadius={`3xl`}
													fontSize={`18px`}
													fontWeight={`bold`}
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
												{/* <EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} /> */}
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
