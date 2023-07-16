import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	displayContainer: {
		width: '90%',
		height: '20%',
		marginTop: '10%',
	},
	btnsContainer: {
		width: '100%',
		height: '65%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnsContainerRight: {
		display: 'flex',
		width: '70%',
		height: '95%',
		flexDirection: 'column',
	},
	btnsTopContainer: {
		display: 'flex',
		width: '100%',
		height: '7%',
		flexDirection: 'column',
		marginTop: '5%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	horizantalRow: {
		display: 'flex',
		height: '17%',
		flexDirection: 'row',
		columnGap: '10%',
		marginBottom: '6%',
	},
	horizantalTopRow: {
		display: 'flex',
		height: '90%',
		width: '90%',
		flexDirection: 'row',
		columnGap: '10%',
	},
	verticalRow: {
		width: '20%',
		height: '95%',
		paddingLeft: '1%',
		rowGap: '15%',
	},
});
