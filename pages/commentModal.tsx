import React from "react";
import {
  Input,
  Textarea,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const CommentModal = (props: Props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
          <ModalContent w="380px" border="1px solid black">
            <ModalHeader fontWeight="bold" fontSize="30px" pt="5px" pb="0">
              Comment
            </ModalHeader>
            <ModalBody>
              <Text fontSize="20px" fontWeight="bold" pb="5px">
                Name
              </Text>
              <Input pb="5px" />
              <Text fontSize="20px" fontWeight="bold" pb="5px">
                Your Comment
              </Text>
              <Textarea
                mb="10px"
                borderColor="blackAlpha.800"
                h="160px"
                pb="5px"
              />
              <Button
                mb="15px"
                bgColor="green.600"
                color="white"
                fontSize="18px"
                border="1px solid black"
                w="100%"
              >
                CREATE
              </Button>
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
