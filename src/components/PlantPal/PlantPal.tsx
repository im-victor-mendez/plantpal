import './PlantPal.scss'
import { ReactComponent as PlantIcon } from '../../assets/svg/plant.svg'

const className = 'plantpal'

export enum Types {
	DEFAULT = className,
	HORIZONTAL = `${className} horizontal`,
}

/**
 * PlantPal
 * @description Icon and application name of Plantpal
 * @param type Type of PlantPal
 * @returns {React.JSX.Element}
 */
function PlantPal({ type = Types.DEFAULT }): React.JSX.Element {
	return (
		<section className={type} data-testid="plantpal">
			<PlantIcon data-testid="icon" />
			<h1 className="title">PlantPal</h1>
		</section>
	)
}
export default PlantPal
