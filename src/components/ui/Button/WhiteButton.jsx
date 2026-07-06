function WhiteButton(props) {
  return (
    <button
      className="hidden md:block bg-white hover:bg-primary hover:text-white transition duration-500 
      text-black py-2 px-4 rounded-2xl cursor-pointer"
    >
      {props.buttonText}
    </button>
  );
}

export default WhiteButton;
