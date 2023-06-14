import './Plants.scss'
import { ButtonIcon, ButtonIconTypes } from '@components/Button/Button'
import Garden from '@components/Garden/Garden'
import { RootState } from '@store/store'
import { Garden as GardenType } from '@store/types'
import { useSelector } from 'react-redux'
import { ReactComponent as AddIcon } from '@assets/svg/add-plus.svg'
import CreateGarden from '@layouts/Garden/CreateGarden/CreateGarden'
import { useState } from 'react'

/**
 * Plants
 * @description Page to display users gardens
 * @returns {React.JSX.Element}
 */
function Plants(): React.JSX.Element {
	const [createGarden, setCreateGarden] = useState(false)
	const { user } = useSelector((state: RootState) => state.auth)

	function displayGarden() {
		setCreateGarden(true)
	}

	if (createGarden) return <CreateGarden setDisplay={setCreateGarden} />

	return (
		<main id="plants" className="page">
			{user?.gardens.map((garden: GardenType) => (
				<Garden
					key={`${garden.id}`}
					description={garden.description}
					image={garden.image}
					name={garden.name}
					path={garden.path}
				/>
			))}
			<ButtonIcon
				icon={<AddIcon />}
				functionality={displayGarden}
				type={ButtonIconTypes.CUBE}
			/>
		</main>
	)
}
export default Plants
