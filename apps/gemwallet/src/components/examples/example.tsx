import { Button, Flex, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExampleFormState } from "./example.types";

export const Example = () => {
  const { register, handleSubmit } = useForm<ExampleFormState>();

  const submitHandler: SubmitHandler<ExampleFormState> = (values) => {
    alert(JSON.stringify(values, undefined, 2));
  };

  return (
    <>
      <Text fontSize="2xl" mb="6">
        Example
      </Text>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack direction="column" spacing={8}>
          <FormControl id="firstName">
            <Stack direction={{ base: "column" }}>
              <FormLabel variant="inline">First Name</FormLabel>
              <Input {...register("firstName")} />
            </Stack>
          </FormControl>

          <FormControl>
            <Stack direction={{ base: "column" }}>
              <FormLabel id="lastName" variant="inline">
                Last Name
              </FormLabel>
              <Input {...register("lastName")} />
            </Stack>
          </FormControl>
        </Stack>

        <Flex direction="row-reverse">
          <Button backgroundColor="cyan.100" mt="8" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
};
