import './PlantPal.scss'
import { ReactComponent as PlantIcon } from '../../assets/svg/plant.svg'

const className = 'plantpal'

export enum Types {
  DEFAULT = className,
  HORIZONTAL = `${className} horizontal`
}

function PlantPal({ type = Types.DEFAULT }) {
  return (
    <section className={type}>
        <PlantIcon/>
        <h1 className='title'>PlantPal</h1>
    </section>
  )
}
export default PlantPal