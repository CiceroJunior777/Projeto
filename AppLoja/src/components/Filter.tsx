import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
    title: string;
    isActive?: boolean;
    type: 'anime' | 'futebol';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {

    const { colors } = useTheme();

    const colorType = type === "anime" ? colors.secondary[100] : colors.green[300];

    return (
        <Button 
        variant="outline" borderWidth={isActive ? 1 : 0} 
        borderColor={colorType}
        bgColor="gray.600"
        w={110}
        h={100}
        {...rest}
        >
            <Text color={isActive ? colorType : "gray.300"} fontSize="xs" textTransform="uppercase">
                {title}
            </Text>
        </Button>
    );
}