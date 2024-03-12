import React, { useCallback } from 'react';
import { View, Button, StyleSheet, FlatList, Image, Text, useWindowDimensions } from 'react-native';
import useGetData from '../customHook/useGetData';
import LoadingComponent from './Loading';
import { FlashList } from '@shopify/flash-list';

const FlashlistScreen = ({ navigation }: { navigation: any }) => {

    const { data, loading, error } = useGetData();

    const renderDataItem = useCallback(({ item }) => {
        return (
            <View style={{ backgroundColor: 'white', width: 350, margin: 10, borderRadius: 10, elevation: 10, alignSelf: 'center' }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: 200, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <Text style={[{ flex: 1 }, styles.text]}>{item.title}</Text>
                    <Text style={styles.text}>${item.price}</Text>
                </View>
            </View>
        );
    }, []);

    return (
        <>
            <FlashList
                data={data}
                keyExtractor={(item, index) => item.id.toString() + index.toString()}
                renderItem={renderDataItem}
                estimatedItemSize={200}
                contentInsetAdjustmentBehavior="always"
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default FlashlistScreen;