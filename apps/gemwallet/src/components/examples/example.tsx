import { Button, Code, Flex, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useGemWallet } from "../../shared/contexts"
import { ExampleFormState } from "./example.types"

export const Example = () => {
  const { register, handleSubmit } = useForm<ExampleFormState>()
  const { isInstalled } = useGemWallet()

  const submitHandler: SubmitHandler<ExampleFormState> = (values) => {
    alert(JSON.stringify(values, undefined, 2))
  }

  return (
    <Stack spacing="6">
      <Text fontWeight="bold" fontSize="2xl">
        Example to use forms with Chakra UI and React Hook Form
      </Text>

      <Stack>
        <Text>{`Is GemWallet installed? ${isInstalled ? "YES" : "NO"}`}</Text>
        <Code p="2" borderRadius="xl" children={`const { isInstalled } = useGemWallet()`} />
      </Stack>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack direction="column" spacing={8}>
          <FormControl id="firstName" isRequired>
            <Stack direction={{ base: "column" }}>
              <FormLabel>First Name</FormLabel>
              <Input {...register("firstName")} />
            </Stack>
          </FormControl>

          <FormControl id="lastName" isRequired>
            <Stack direction={{ base: "column" }}>
              <FormLabel>Last Name</FormLabel>
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
    </Stack>
  )
}
