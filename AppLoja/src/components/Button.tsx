import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';
import { ReactNode } from 'react';

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {

    return (

        <NativeBaseButton
            bg="green.500"
            w={240}
            h="75px"
            ml={4}
            rounded="lg"
            _pressed={{ bg: "green.500" }}
            {...rest}
        >
            <Heading color="white" fontSize="20">
                {title}
            </Heading>
        </NativeBaseButton>

    );
}   