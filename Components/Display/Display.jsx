import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// Styles
import styles from './styles';

const Display = ({ outPut, textStyles = {}, displayStyle }) => {
	return (
		<View style={[styles.container, displayStyle]}>
			<Text style={[styles.text, textStyles]}>{outPut}</Text>
		</View>
	);
};

export default Display;
