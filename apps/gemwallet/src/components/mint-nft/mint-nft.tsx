import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react"
import { MintNFTRequest, mintNFT } from "@gemwallet/api"
import { SubmitHandler, useForm } from "react-hook-form"
import { stringToHex } from "../../shared/helpers"

export const MintNft = () => {
  // Help, use the function stringToHex from shared/helpers for the NFT URI.
  const { register, handleSubmit } = useForm<MintNFTRequest>()

  const createNft: SubmitHandler<MintNFTRequest> = (values) => {
    const request: MintNFTRequest = {
      URI: stringToHex(values.URI ?? ""),
      NFTokenTaxon: values.NFTokenTaxon,
    }

    mintNFT(request).then((response) => console.log(response))
  }

  return (
    <Stack spacing="6">
      <Text>Send Payment</Text>

      <form onSubmit={handleSubmit(createNft)}>
        <Stack direction="column" spacing={8}>
          <FormControl id="taxon" isRequired>
            <Stack direction={{ base: "column" }}>
              <FormLabel>Taxon</FormLabel>
              <Input {...register("NFTokenTaxon")} />
            </Stack>
          </FormControl>

          <FormControl id="uri" isRequired>
            <Stack direction={{ base: "column" }}>
              <FormLabel>URI</FormLabel>
              <Input {...register("URI")} />
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
