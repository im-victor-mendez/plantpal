import { Routes, Route } from 'react-router-dom'
import Pages from './Pages'

/**
 * Router
 * @description Returns Routes component with mapped pages as Route
 * @returns {React.JSX.Element}
 */
function Router(): React.JSX.Element {
    const MappedPages = Pages.map(
        ({element, name, path}) =>
        <Route key={name} path={path} element={element}/>
    )

    return (
        <Routes>
            {MappedPages}
        </Routes>
    )
}
export default Router