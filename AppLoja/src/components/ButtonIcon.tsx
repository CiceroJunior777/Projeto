import React, { ReactNode } from 'react';
import { Button as NativeBaseButton, IButtonProps } from 'native-base';

type Props = IButtonProps & {
    children: ReactNode;
}

export function ButtonIcon({ children, ...rest }: Props) {
    return (
        <NativeBaseButton
            bg="gray.600"
            h={14}
            fontSize="sm"
            rounded="sm"
            _pressed={{ bg: "gray.700" }}
            {...rest}
        >
            {children}

        </NativeBaseButton>
    );
}