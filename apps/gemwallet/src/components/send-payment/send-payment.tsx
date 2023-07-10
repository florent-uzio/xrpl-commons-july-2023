import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react"
import { SendPaymentRequest, sendPayment } from "@gemwallet/api"
import { SubmitHandler, useForm } from "react-hook-form"

export const SendPayment = () => {
  // Hint, use SendPaymentRequest from "@gemwallet/api" to define the form state
  const { register, handleSubmit } = useForm<SendPaymentRequest>()

  const submitPayment: SubmitHandler<SendPaymentRequest> = (values) => {
    const payment: SendPaymentRequest = {
      amount: values.amount,
      destination: values.destination,
    }

    // alert(JSON.stringify(values, undefined, 2))
    sendPayment(payment).then((response) => {
      console.log(response)
    })
  }

  return (
    <Stack spacing="6">
      <Text>Send Payment</Text>

      <form onSubmit={handleSubmit(submitPayment)}>
        <Stack direction="column" spacing={8}>
          <FormControl id="destination" isRequired>
            <Stack direction={{ base: "column" }}>
              <FormLabel>Destination</FormLabel>
              <Input {...register("destination")} />
            </Stack>
          </FormControl>

          <FormControl id="amount" isRequired>
            <Stack direction={{ base: "column" }}>
              <FormLabel>Amount</FormLabel>
              <Input {...register("amount")} />
            </Stack>
          </FormControl>
        </Stack>

        <Button backgroundColor="cyan.100" type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  )
}
