import { Header } from "../components/Header";
import {
  Input,
  Textarea,
  Box,
  Flex,
  FormLabel,
  Text,
  Button,
  Stack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";
import { PenIcon } from "./penIcon";
import { CommentModal } from "./commentModal";
import Link from 'next/link'
import { useState } from "react";

type commentObject = {
  name: string;
  comment: string;
  createdAt: string;
}

export default function ShowPage() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [comments, setComments] = useState<commentObject[]>([])

  /**
  * commentの表示は関数に分けました
  */
  const commentList = comments.map((comment)=>{
    return(
      <Stack
        borderWidth="1px"
        borderColor="blackAlpha.800"
        borderRadius="10px"
        fontWeight="bold"
      >
        <Flex
          bgColor="green.700"
          borderRadius="10px 10px 0 0"
          borderBottom="1px solid black"
          color="white"
          justifyContent="space-between"
        >
          <Text ml="30px" fontSize="22px">
            {comment.name}
          </Text>
          <Text mr="30px" fontSize="22px">
            {comment.createdAt}
          </Text>
        </Flex>
        <Text pb="60px" pl="10px">
          {comment.comment}
        </Text>
      </Stack>
    )
  })

  return (
    <>
      <Header />
      <Stack mt="20px" direction={["column", "row"]} mb="100px">
        <Box w="630px" ml="99px">
          <Text
            fontSize="28px"
            fontWeight="bold"
            lineHeight="33px"
            color="blackAlpha.800"
          >
            SHOW TODO
          </Text>
          <Box
            borderWidth="1px"
            borderColor="blackAlpha.800"
            borderRadius="10px"
            p="10px"
            mt="15px"
            minHeight="630px"
          >
            <Box p="10px">
              <FormLabel
                m="0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
                bgColor="green.300"
              >
                TITLE
              </FormLabel>
              <Text
                h="30px"
                fontSize="20px"
                fontWeight="bold"
                color="blackAlpha.800"
                border="none"
              ></Text>
            </Box>

            <Box p="10px">
              <FormLabel
                m="16px 0 0 0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
                bgColor="green.300"
              >
                DETAIL
              </FormLabel>
              <Text
                h="350px"
                mt="4px"
                fontSize="24px"
                fontWeight="bold"
                color="blackAlpha.800"
                border="none"
              ></Text>
            </Box>
            <HStack spacing="60px" p="10px" pb="20px">
              <Link href={{ pathname: '/todoEdit'}}>
                <Button
                  w="112px"
                  borderRadius="50px"
                  bgColor="green.300"
                  borderWidth="1px"
                  borderColor="blackAlpha.800"
                  iconSpacing="10px"
                  rightIcon={<PenIcon />}
                >
                  Edit
                </Button>
              </Link>

              <Flex direction="column">
                <Text fontWeight="bold">Create</Text>
                <Text fontWeight="bold" fontSize="20px">
                  2020-11-8 18:55
                </Text>
              </Flex>
              <Flex direction="column">
                <Text fontWeight="bold">Update</Text>
                <Text fontWeight="bold" fontSize="20px">
                  2020-11-8 18:55
                </Text>
              </Flex>
            </HStack>
          </Box>
        </Box>

        {/* 右 */}
        <Box w="600px">
          <Flex justify="flex-end">
            <Button
              w="112px"
              h="40px"
              mt="8px"
              mr="10px"
              fontSize="18px"
              fontWeight="bold"
              bg="green.600"
              color="white"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="50px"
              onClick={onOpen}
            >
              Comment
            </Button>
            <Link href={{ pathname: '/Top'}}>
              <Button
                w="112px"
                h="40px"
                mt="8px"
                fontSize="18px"
                fontWeight="bold"
                bg="green.300"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px"
              >
                Back
              </Button>
            </Link>
          </Flex>
          {/* List */}
          <Box my="20px" maxH="600px" overflow="scroll">
            <Stack mt="20px" ml="20px" spacing="32px">
              {comments.length ? commentList : <p>コメントがありません</p>}
            </Stack>
          </Box>
        </Box>
      </Stack>
      <CommentModal isOpen={isOpen} onClose={onClose} comments={comments} setComments={setComments}/>
    </>
  );
}
// test
