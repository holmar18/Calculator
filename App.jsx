import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
// Features
import BasicCalculator from './Features/BasicCalculator/BasicCalculator';
// theme
import { Theme } from './Theme';

export default function App() {
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={[Theme.bgLinearThird, Theme.bgLinearFourth]}
			style={styles.container}
			start={{ x: 0, y: 0.0 }}
			end={{ x: 1, y: 1 }}
		>
			<BlurView
				intensity={102}
				tint='light'
				style={[styles.innerContainer, styles.blur]}
			>
				<LinearGradient
					colors={[Theme.bgLinearFirst, Theme.bgLinearSecond]}
					style={styles.innerContainer}
					start={{ x: 0, y: 0.0 }}
					end={{ x: 1, y: 1 }}
				>
					<BasicCalculator />
				</LinearGradient>
			</BlurView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	innerContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	blur: {
		borderRadius: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
	},
});
