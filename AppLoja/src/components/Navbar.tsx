import { Heading, HStack, IconButton, IInputProps, StyledProps, useTheme } from 'native-base';
import { ReactNode } from 'react';

type Props = StyledProps & {
    children: ReactNode;
}

export function Navbar({ children, ...rest }: Props) {

    const { colors } = useTheme();

    return (
        <HStack
            w="full"
            alignItems="center"
            bg="gray.600"
            pt="70px"
            mb={-7}
            {...rest} >

            <HStack space={5} ml={4}>
                {children}
            </HStack>
        </HStack>
    );
}