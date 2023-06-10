import { ReactComponent as CloseIcon } from '@assets/svg/close.svg'
import Input from '@components/Input/Input'
import './CreateGarden.scss'
import { Dispatch, SetStateAction, useState } from 'react'
import Button from '@components/Button/Button'

interface CreateGardenProps {
	setDisplay: Dispatch<SetStateAction<boolean>>
}

/**
 * Create Garden
 * @description Layout to create a garden
 * @param active Boolean to display or not layout
 * @returns
 */
function CreateGarden({ setDisplay }: CreateGardenProps) {
	const [name, setName] = useState<string>('')
	const [description, setDescription] = useState<string>('')

	function closeLayout() {
		setDisplay(false)
	}

	return (
		<main className="create-garden-container" data-testid="create-garden">
			<CloseIcon
				className="close-icon"
				data-testid="close-icon"
				onClick={closeLayout}
			/>
			<section className="create-garden">
				<div className="inputs">
					<Input placeholder={'Name'} setValue={setName} />
					<Input placeholder={'Description'} setValue={setDescription} />
				</div>
				<Button
					display={'Create Garden :D'}
					data-testid="create-garden-button"
					functionality={function (): void {
						throw new Error('Function not implemented.')
					}}
				/>
			</section>
		</main>
	)
}
export default CreateGarden
