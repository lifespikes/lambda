import { FC } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const SpikeButton: FC<Props> = (props) => {
  const { children, onClick, ...rest } = props
  return (
    <Button isLoading={true} {...rest} onClick={onClick}>
      {children}
    </Button>
  )
}

export default SpikeButton
