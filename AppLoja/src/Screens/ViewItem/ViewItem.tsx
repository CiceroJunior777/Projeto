import React from 'react';
import { Heading, HStack, VStack } from 'native-base';
import { Item } from '../../components/Item';
import { Button } from '../../components/Button';

export function ViewItem() {
  return (
    <VStack flex={1}>

      {/* CABEÇALHO */}
      <HStack
        w="full"
        h={110}
        pt="25px"
        bg="gray.700"
        alignItems="center">

        <Heading flex={1} textAlign="center" color="gray.100"> Visualizar </Heading>

      </HStack>

      {/* INICIO DA VISUALIZAÇÃO DO ITEM */}

      <Item />

      <HStack space={2} mb={7}>

        <Button color="green.100" title="Comprar" />

        <Button
        borderWidth={3}
        borderColor="red.700"
        title="Carrinho"
        w={170}
        bg="gray.100"
        >

        </Button>

      </HStack>

    </VStack>
  );
}