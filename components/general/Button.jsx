const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-dark-10 text-light-86 border-2 border-transparent flex gap-8 items-center justify-center  text-2xl radius w-fit px-10 py-2 cursor-pointer hover:bg-transparent hover:text-dark-10 hover:border-dark-10"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
