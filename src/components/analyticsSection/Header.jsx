function Header(props) {
  return (
    <div className="flex justify-between p-2">
      <span className="font-medium">{props.props.headerTitle}</span>
      <span className="w-12 h-8 border border-border rounded-xl text-center text-secondary-text text-sm">
        {props.props.timeline}
      </span>
    </div>
  );
}

export default Header;
