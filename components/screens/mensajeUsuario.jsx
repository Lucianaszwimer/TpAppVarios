import { Vibration, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function mensajeUSuario(err) {
    const navigation = useNavigation();
    const DURATION = 1000;

    Vibration.vibrate(DURATION);
    Alert.alert(err);
}