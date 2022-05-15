import { Button, VStack } from '@chakra-ui/react'
import Spikeform, { useSpikeForm } from '@spikeform/react'

const SpikeTest = () => {
  const form = useSpikeForm(
    '',
    {
      business_name: '',
      name: '',
      email: '',
      date: '',
    },
    {
      ignoreValidation: ['verification'],
      debounceLength: 350,
    }
  )

  const onSubmitForm = (e: any) => {
    console.log(e)
  }

  return (
    <Spikeform form={form} onSubmit={onSubmitForm}>
      {({ Field }, { ready, errors, set, data }) => (
        <VStack>
          <>
            <Field name={'business_name'} placeholder={'Pied Piper, LLC.'} />
            <Field name={'name'} placeholder={'Richard Hendricks'} />
            <Field name={'date'} type='date' />
            <Field name={'email'} placeholder={'richard@piedpiper.com'} />
            <Button
              variant={'primary'}
              disabled={!ready}
              px={10}
              type={'submit'}
              w={'100%'}
            >
              Continue
            </Button>
          </>
        </VStack>
      )}
    </Spikeform>
  )
}

export default SpikeTest
