import { useState } from 'react';
import { Text, VStack, useTheme, HStack, Heading, FlatList, Center } from 'native-base';
import { ChatTeardropText, ShoppingBag, User } from 'phosphor-react-native';

import { Navbar } from '../../components/Navbar';
import { Order, OrderProps } from '../../components/Order';
import { Filter } from '../../components/Filter';
import { Input } from '../../components/Input';
import { ButtonIcon } from '../../components/ButtonIcon';

export function Home() {

  const { colors } = useTheme();

  const [statusSelected, setStatusSelected] = useState<"anime" | "futebol">("anime");
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      fornecedor: '1248',
      when: '09/06/2022 às 10:00',
      status: 'anime'
    },

    {
      id: '1234',
      fornecedor: '1248',
      when: '09/06/2022 às 10:00',
      status: 'anime'
    },
  ]);

  return (

    <VStack flex={1}>

      {/* BARRA DE NAVEGAÇÃO */}
      <Navbar bg="gray.700">
        <Input
          w="250"
          h="80px"
          rounded="2xl"
          bg="gray.600"
          placeholder='Olá, Vamos as Compras?'
          fontSize={20}
        />

        <ButtonIcon
          w="80px"
          h="80px"
          rounded="2xl">
          <ShoppingBag size={50} color={colors.gray[100]} />
        </ButtonIcon>

        <ButtonIcon
          w="80px"
          h="80px"
          rounded="2xl">
          <User size={40} color={colors.gray[100]} />
        </ButtonIcon>
      </Navbar>

      {/* FILTRO DE CATEGORIAS */}
      <VStack flex={1} px={6} bg="gray.700">

        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">

          <Heading color="gray.100" fontSize={30}> Categorias </Heading>

        </HStack>

        <HStack space={3} mb={8}>

          <Filter
            type="anime"
            title="anime"
            onPress={() => setStatusSelected('anime')}
            isActive={statusSelected === 'anime'} />

          <Filter
            type="futebol"
            title="futebol"
            onPress={() => setStatusSelected('futebol')}
            isActive={statusSelected === 'futebol'} />

        </HStack>

        {/* LISTAS DOS ITENS DA LOJA POR CATEGORIA */}
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">

          <Heading color="gray.100" fontSize={30}> Feed </Heading>

        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100, flexDirection: "row" }}

          /* LÓGICA, CASO A CATEGORIA NÃO RETORNE ITENS */
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Camisas Para Esta Categoria ainda {'\n'}
                Não {statusSelected === 'anime' ? 'Disponiveis' : 'Disponiveis'}
              </Text>
            </Center>
          )}
        />

      </VStack>
    </VStack>
  );
}