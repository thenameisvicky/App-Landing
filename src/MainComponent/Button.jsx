const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-2 md:px-7 md:py-4 border font-montserrat text-base md:text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"} hover:scale-105 transform duration-300 `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-4 h-4 md:w-5 md:h-5"
        />
      )}
    </button>
  );
};

export default Button;
