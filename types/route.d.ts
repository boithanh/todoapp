import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
type RootStackParamList = {
    Home1: undefined;
    Details: { id: number, title: string, star: number } | undefined;
    // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type DrawerParamList = {
    MainDrawer: undefined;
    // ... other drawer screens
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
    declare module "*.png"
}

// Combine them for screen props
export type HomeScreenProps = CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, 'MainDrawer'>,

>;
