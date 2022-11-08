type PropTypes = {
    right?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};

const PageNavButton = ({
    onClick = () => null,
    right = false,
    disabled = false,
}: PropTypes): JSX.Element => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`h-20 w-20 disabled:cursor-not-allowed rounded-full bg-white bg-opacity-40 text-center focus:bg-opacity-100 [&:not(:disabled)]:hover:bg-opacity-100 transition-all duration-300 fixed bottom-4 ${
                right ? "right-6" : "left-6"
            }`}
        >
            <span className="text-3xl font-bold leading-[5rem]">
                {right ? ">" : "<"}
            </span>
        </button>
    );
};

export default PageNavButton;
