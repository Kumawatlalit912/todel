import { Button, Card, CardHeader, useColorMode } from "@chakra-ui/react";

function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Card>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Card>
    )
  }

export default Example;