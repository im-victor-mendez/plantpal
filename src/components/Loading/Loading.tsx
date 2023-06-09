import './Loading.scss'
import { ReactComponent as PlantIcon } from '@assets/svg/plant.svg'
import { useEffect, useState } from 'react'

/**
 * Loading
 * @description Returns a loading animation
 * @returns {React.JSX.Element}
 */
function Loading(): React.JSX.Element {
	const [active, setActive] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			setActive(!active)
		}, 1000)

		return () => clearInterval(interval)
	})

	return (
		<section className="loading">
			<PlantIcon
				className={`${active ? 'active' : ''}`}
				data-testid="loading-icon"
			/>
			<h1 className="message">Loading</h1>
		</section>
	)
}
export default Loading
