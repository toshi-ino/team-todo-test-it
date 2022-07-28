import React, { useState } from "react";
import Head from "next/head";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Header } from "../components/Header";

type FormInput = {
  title: string;
  detail: string;
  priority: string;
};

export default function Create() {
  const [value, setValue] = useState("High");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Todo New</title>
      </Head>
      <Header />
      <Container mt="16px" p="0" w="84.375%" maxW="1080px">
        <VStack>
          <Flex w="100%">
            <Text
              fontSize="28px"
              fontWeight="bold"
              lineHeight="33px"
              color="blackAlpha.800"
            >
              NEW TODO
            </Text>
            <Spacer />
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
          </Flex>
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.title ? true : false}>
              <FormLabel
                m="0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
                htmlFor="title"
              >
                TITLE
              </FormLabel>
              <Input
                id="title"
                h="72px"
                mt="4px"
                p="8px 16px"
                fontSize="24px"
                fontWeight="bold"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="10px"
                {...register("title", {
                  required: "文字を入力してください",
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.detail ? true : false}>
              <FormLabel
                // FormControlにmt:8pxがあるため、FormLabelのmtは16pxに設定
                m="16px 0 0 0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
              >
                DETAIL
              </FormLabel>
              <Textarea
                id="detail"
                h="208px"
                mt="4px"
                fontSize="24px"
                fontWeight="bold"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="10px"
                {...register("detail", {
                  required: "文字を入力してください",
                })}
              />
              <FormErrorMessage>
                {errors.detail && errors.detail.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel
                // FormControlにmt:8pxがあるため、FormLabelのmtは16pxに設定
                m="16px 0 0 0"
                fontSize="24px"
                lineHeight="24px"
                color="blackAlpha.800"
              >
                PRIORITY
              </FormLabel>
              <RadioGroup mt="4px" onChange={setValue} value={value}>
                <Stack h="28px" spacing="24px" direction="row">
                  <Radio value="High" {...register("priority")}>
                    <Text
                      fontSize="24px"
                      fontWeight="bold"
                      lineHeight="28px"
                      color="blackAlpha.800"
                    >
                      High
                    </Text>
                  </Radio>
                  <Radio value="Middle" {...register("priority")}>
                    <Text
                      fontSize="24px"
                      fontWeight="bold"
                      lineHeight="28px"
                      color="blackAlpha.800"
                    >
                      Middle
                    </Text>
                  </Radio>
                  <Radio value="Low" {...register("priority")}>
                    <Text
                      fontSize="24px"
                      fontWeight="bold"
                      lineHeight="28px"
                      color="blackAlpha.800"
                    >
                      Low
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Flex w="100%" flexDirection="row-reverse">
              <Button
                type="submit"
                w="112px"
                h="40px"
                // Flexにmt:8pxがあるため、Buttonのmtは4pxに設定
                m="4px 0 0 8px"
                p="0"
                fontSize="18px"
                fontWeight="bold"
                bg="green.600"
                color="green.50"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px"
              >
                CREATE
              </Button>
              <Button
                w="112px"
                h="40px"
                // Flexにmt:8pxがあるため、Buttonのmtは4pxに設定
                mt="4px"
                p="0"
                fontSize="18px"
                fontWeight="bold"
                bg="pink.100"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px"
              >
                DRAFT
              </Button>
            </Flex>
          </form>
        </VStack>
      </Container>
    </>
  );
}
