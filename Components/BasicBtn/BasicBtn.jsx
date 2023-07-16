import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
// Theme
import { Theme } from '../../Theme';
// Styles
import styles from './styles';

/**
 * Calculator buttons
 *
 * @param {updateEquation} function - store value from btn
 * @returns
 */
const BasicBtn = ({
	updateEquation,
	btnText,
	stylesView = [],
	buttonStyle = [],
	linear = [Theme.whiteBtnFirst, Theme.whiteBtnSecond],
	buttonText = { color: Theme.blueBtn },
	linearStyle = [],
}) => {
	return (
		<View style={[styles.container, stylesView]}>
			<TouchableOpacity
				style={buttonStyle}
				onPress={() => updateEquation(btnText)}
			>
				<LinearGradient
					// Background Linear Gradient
					colors={linear}
					style={[styles.linearGradient, linearStyle]}
					start={{ x: 0, y: 0.0 }}
					end={{ x: 1, y: 1 }}
				>
					{/* Blur View - GlassMorphism */}
					<BlurView intensity={14} tint='light' style={styles.linearGradient}>
						<Text style={[styles.buttonText, buttonText]}>{btnText}</Text>
					</BlurView>
					{/* Blur View - GlassMorphism - END */}
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
};

export default BasicBtn;
