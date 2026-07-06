function PurpleButton(props) {
  return (
    <button className="hidden md:block bg-primary hover:bg-primary-hover hover:text-black transition duration-500 text-white py-2 px-4 rounded-2xl cursor-pointer">
      {props.buttonText}
    </button>
  );
}

export default PurpleButton;
