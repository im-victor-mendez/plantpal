interface ButtonProps {
    display: string
    functionality: () => void
}

/**
 * Button
 * @description Button component to use to execute functions.
 * @param display String to display
 * @param functionality Function to execute when button is clicked
 * @returns {React.JSX.Element}
 * @example <Button display={`Create Account`}
 * functionality={createAccount}/>
 */
function Button({ display, functionality }: ButtonProps): React.JSX.Element {
    /**
     * On click
     * @description Function to dispatch/execute custom function
     */
    function onClick() {
        functionality()
    }

    return (
        <button className="button" onClick={onClick}>
            {display}
        </button>
    )
}
export default Button