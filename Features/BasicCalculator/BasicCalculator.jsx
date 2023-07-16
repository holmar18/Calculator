import React from 'react';
import { View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
// Components
import { BasicBtn, Display } from '../../Components';
// Hooks
import useCalculate from '../../Hooks/useCalculate';
// Theme
import { Theme, Components } from '../../Theme';
// Styles
import styles from './styles';

const BasicCalculator = () => {
	const { displayCalc, displayEqual, updateEquation, clear, RemoveLast } =
		useCalculate();

	return (
		<View style={styles.container}>
			{/* Out come displays */}
			<View style={styles.displayContainer}>
				<Display
					outPut={displayCalc}
					textStyles={{ fontSize: 23, color: Theme.lightGray }}
					displayStyle={{ height: Theme.dpSmall }}
				/>
				<Display
					outPut={displayEqual}
					textStyles={{ fontSize: 40, fontWeight: 'bold' }}
					displayStyle={{ height: Theme.dpBig }}
				/>
			</View>
			{/* Out come displays - END */}

			{/* btn Row 5 - Numbers: (Ac, del, /)*/}
			<View style={styles.btnsTopContainer}>
				<View style={styles.horizantalTopRow}>
					<BasicBtn
						buttonText={{ color: Theme.blueBtn }}
						updateEquation={clear}
						btnText={'e'}
						linearStyle={{ borderRadius: 10 }}
						stylesView={Components.SmallEquationBtnStyle}
					/>
					<BasicBtn
						buttonText={{ color: Theme.blueBtn }}
						updateEquation={RemoveLast}
						btnText={
							<MaterialCommunityIcons
								name='pi'
								size={32}
								color={`${Theme.blueBtn}`}
							/>
						}
						linearStyle={{ borderRadius: 10 }}
						stylesView={Components.SmallEquationBtnStyle}
					/>
					<BasicBtn
						buttonText={{ color: Theme.blueBtn }}
						updateEquation={updateEquation}
						btnText={'sin'}
						linearStyle={{ borderRadius: 10 }}
						stylesView={Components.SmallEquationBtnStyle}
					/>
					<BasicBtn
						buttonText={{ color: Theme.blueBtn }}
						updateEquation={updateEquation}
						btnText={'deg'}
						linearStyle={{ borderRadius: 10 }}
						stylesView={Components.SmallEquationBtnStyle}
					/>
				</View>
			</View>
			{/* btn Row 5 - END */}

			{/* Buttons container - Righ */}
			<View style={styles.btnsContainer}>
				{/* Buttons container - Righ */}
				<View style={styles.btnsContainerRight}>
					{/* btn Row 5 - Numbers: (Ac, del, /)*/}
					<View style={styles.horizantalRow}>
						<BasicBtn
							buttonText={{ color: Theme.whiteBtn }}
							updateEquation={clear}
							linear={[Theme.blueBtnFirst, Theme.blueBtnSecond]}
							btnText={'Ac'}
							stylesView={{ borderColor: Theme.blueBtnFirst }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.whiteBtn }}
							updateEquation={RemoveLast}
							linear={[Theme.blueBtnFirst, Theme.blueBtnSecond]}
							btnText={<Feather name='delete' size={34} color='#FFF' />}
							stylesView={{ borderColor: Theme.blueBtnFirst }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'/'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
					</View>
					{/* btn Row 5 - END */}

					{/* btn Row 4 - Numbers: (7, 8, 9)*/}
					<View style={styles.horizantalRow}>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'7'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'8'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'9'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
					</View>
					{/* btn Row 4 - END*/}

					{/* btn Row 3 - Numbers: (6, 5, 4)*/}
					<View style={styles.horizantalRow}>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'6'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'5'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'4'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
					</View>
					{/* btn Row 3 - END */}

					{/* btn Row 2 - Numbers: (3, 2, 1) */}
					<View style={styles.horizantalRow}>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'3'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'2'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
						<BasicBtn
							buttonText={{ color: Theme.blueBtn }}
							updateEquation={updateEquation}
							btnText={'1'}
							stylesView={{ borderColor: Theme.whiteBtn }}
						/>
					</View>
					{/* btn Row 2 */}

					{/* btn Row 1 */}
					<View style={styles.horizantalRow}>
						<BasicBtn
							updateEquation={updateEquation}
							buttonText={{ color: Theme.blueBtn }}
							btnText={'0'}
							stylesView={{ width: '64%', borderColor: Theme.borderWhite }}
						/>
						<BasicBtn
							updateEquation={updateEquation}
							btnText={'.'}
							stylesView={{ borderColor: Theme.borderWhite }}
						/>
					</View>
					{/* btn Row 1 - END*/}
				</View>
				{/* Buttons container - Righ - END */}

				{/* Buttons container - Left */}
				<View style={styles.verticalRow}>
					<BasicBtn
						updateEquation={updateEquation}
						buttonText={{ color: Theme.blueBtn }}
						btnText={'*'}
						stylesView={{
							width: '100%',
							height: Theme.smBtnWidth,
							borderColor: Theme.borderWhite,
						}}
					/>
					<BasicBtn
						updateEquation={updateEquation}
						buttonText={{ color: Theme.blueBtn }}
						btnText={'-'}
						stylesView={{
							width: '100%',
							height: Theme.smBtnWidth,
							borderColor: Theme.borderWhite,
						}}
					/>
					<BasicBtn
						updateEquation={updateEquation}
						buttonText={{ color: Theme.blueBtn }}
						btnText={'+'}
						stylesView={{
							width: '100%',
							height: Theme.lgBtnWidth,
							borderColor: Theme.borderWhite,
						}}
					/>
					<BasicBtn
						updateEquation={updateEquation}
						btnText={'='}
						buttonText={{ color: Theme.borderWhite }}
						linear={[Theme.blueBtnFirst, Theme.blueBtnSecond]}
						stylesView={{
							width: '100%',
							height: Theme.lgBtnWidth,
							borderColor: Theme.blueBtnFirst,
						}}
					/>
				</View>
				{/* Buttons container - Left - END*/}
			</View>
			{/* Buttons container - Righ - END*/}
		</View>
	);
};

export default BasicCalculator;
