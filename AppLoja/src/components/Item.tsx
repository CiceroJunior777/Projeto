import React from 'react';
import { HStack } from 'native-base';

export function Item() {
    return (
        <HStack
            bg="gray.300"
            mb={4}
            h={420}
            w="full"
            mr={3}
            overflow="hidden" />
    );
}