import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import { MyButton } from '../../components';

export default function GameGambar4({ navigation }) {

    const [pilih, setPilih] = useState([false, false, false, false, false]);


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ImageBackground source={require('../../assets/b4.png')} style={{

                width: 350,
                height: 640,
                position: 'relative',
            }}>
                <TouchableNativeFeedback onPress={() => {
                    let TMPPilih = [...pilih];
                    TMPPilih[0] = true;
                    setPilih(TMPPilih);
                }}>
                    <View style={{
                        left: 3,
                        top: 268,
                        position: 'absolute',
                        zIndex: 99,
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        borderWidth: pilih[0] ? 2 : 0,
                        borderColor: colors.danger,
                    }}>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => {
                    let TMPPilih = [...pilih];
                    TMPPilih[1] = true;
                    setPilih(TMPPilih);
                }}>
                    <View style={{
                        left: 224,
                        top: 290,
                        position: 'absolute',
                        zIndex: 99,
                        width: 40,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: pilih[1] ? 2 : 0,
                        borderColor: colors.danger,
                    }}>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => {
                    let TMPPilih = [...pilih];
                    TMPPilih[2] = true;
                    setPilih(TMPPilih);
                }}>
                    <View style={{
                        left: 230,
                        top: 210,
                        position: 'absolute',
                        zIndex: 99,
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: pilih[2] ? 2 : 0,
                        borderColor: colors.danger,
                    }}>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => {
                    let TMPPilih = [...pilih];
                    TMPPilih[3] = true;
                    setPilih(TMPPilih);
                }}>
                    <View style={{
                        left: 262,
                        top: 162,
                        position: 'absolute',
                        zIndex: 99,
                        width: 50,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: pilih[3] ? 2 : 0,
                        borderColor: colors.danger,
                    }}>

                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => {
                    let TMPPilih = [...pilih];
                    TMPPilih[4] = true;
                    setPilih(TMPPilih);
                }}>
                    <View style={{
                        left: 135,
                        top: 56,
                        position: 'absolute',
                        zIndex: 99,
                        width: 25,
                        height: 50,
                        borderRadius: 10,
                        borderWidth: pilih[4] ? 2 : 0,
                        borderColor: colors.danger,
                    }}>

                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => {
                    const nilai = pilih.filter(i => i == true).length;
                    const akhir = (nilai / pilih.length) * 100;
                    Alert.alert(MYAPP, 'Nilai Kamu : ' + akhir, [
                        {
                            text: 'ULANGI',
                            onPress: () => {
                                setPilih([
                                    false, false, false, false
                                ])
                            }
                        }, {
                            text: 'KEMBALI',
                            onPress: () => {
                                setPilih([
                                    false, false, false, false
                                ]);
                                navigation.goBack()
                            }
                        },
                    ])
                }}>
                    <View style={{
                        position: 'absolute',
                        bottom: -30,
                        height: 30,
                        backgroundColor: colors.primary,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.white
                        }}>SELESAI</Text>
                    </View>
                </TouchableNativeFeedback>
            </ImageBackground>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})