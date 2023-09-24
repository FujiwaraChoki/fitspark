const Button = ({
    text = 'Button',
    className = '',
    children,
    onClick = () => { },
}) => {
    return (
        <button
            className={`bg-white text-purple-500 hover:bg-purple-500 hover:text-white border border-white px-6 py-3 rounded-full font-semibold transition duration-300 ${className}`}
            onClick={onClick}
        >
            {text}
            {children}
        </button>
    );
};

export default Button;
