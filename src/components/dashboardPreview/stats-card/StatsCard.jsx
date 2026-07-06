function StatsCard(props) {
  return (
    <div className="p-8">
      <div className="flex flex-col w-32 h-32 gap-1 items-center border border-border w-36 p-4 text-center rounded-xl">
        <span className="text-secondary-text text-sm">
          {props.cardContent.title}
        </span>
        <span className="font-medium">{props.cardContent.num}</span>
        <div className="text-sm text-secondary-text">
          <span className="text-primary mr-1">+{props.cardContent.growth}</span>
          <span className="text-secondary-text text-xs">
            vs {props.cardContent.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
