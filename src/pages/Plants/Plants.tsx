import './Plants.scss'
import { ButtonIcon, ButtonIconTypes } from '@components/Button/Button'
import Garden from '@components/Garden/Garden'
import { RootState } from '@store/store'
import { Garden as GardenType } from '@store/types'
import { useSelector } from 'react-redux'
import { ReactComponent as AddIcon } from '@assets/svg/add-plus.svg'

/**
 * Plants
 * @description Page to display users gardens
 * @returns {React.JSX.Element}
 */
function Plants(): React.JSX.Element {
	const { gardens } = useSelector((state: RootState) => state.gardens)

	return (
		<main id="plants" className="page">
			{gardens.map((garden: GardenType) => (
				<Garden
					key={`${garden.name}-key`}
					description={garden.description}
					image={garden.image}
					name={garden.name}
					path={garden.path}
				/>
			))}
			<ButtonIcon
				icon={<AddIcon />}
				functionality={function (): void {
					throw new Error('Function not implemented.')
				}}
				type={ButtonIconTypes.CUBE}
			/>
		</main>
	)
}
export default Plants
