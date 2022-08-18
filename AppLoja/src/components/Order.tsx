import { Box, Circle, HStack, Text, useTheme, VStack, Pressable, IPressableProps } from 'native-base';

export type OrderProps = {
    id: string;
    fornecedor: string;
    when: string;
    status: 'anime' | 'futebol';
}

type Props = IPressableProps & {
    data: OrderProps;
}

export function Order({ data, ...rest }: Props) {

    return (

        <Pressable {...rest}>

            <HStack
                bg="gray.100"
                mb={4}
                h={80}
                w={210}
                mr={3}
                rounded="3xl"
                overflow="hidden" />

        </Pressable>
    );
}