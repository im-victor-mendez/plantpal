import { useNavigate } from 'react-router-dom'
import './Garden.scss'

interface GardenProps {
	description: string | null
	image: string | null
	name: string
	path: string
}

/**
 * Garden
 * @description Dynamically component to display basic garden information.
 * When is clicked navigates into garden path.
 * @param description Garden description. `Optional` string.
 * @param image Garden image path. `Optional` string.
 * @param name Garden name. `Required`.
 * @param path Path to navigate when click component. `Required`.
 * @returns {React.JSX.Element}
 */
function Garden({
	description,
	image,
	name,
	path,
}: GardenProps): React.JSX.Element {
	const navigate = useNavigate()

	function navigateTo() {
		navigate(path)
	}

	const imageToDisplay = image ? (
		<img
			className="image"
			src={image}
			alt={`${name} garden image`}
			data-testid="garden-image"
		/>
	) : (
		<div className="no-image" data-testid="image-substitute"></div>
	)

	return (
		<section className="garden" data-testid="garden" onClick={navigateTo}>
			<h1 className="name" data-testid="garden-name">
				{name}
			</h1>
			{imageToDisplay}
			{description && (
				<p className="description" data-testid="garden-description">
					{description}
				</p>
			)}
		</section>
	)
}
export default Garden
