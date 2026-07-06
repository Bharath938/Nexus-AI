import {
  FaRegFolder,
  GoProjectRoadmap,
  LuSquareActivity,
  FaTasks,
  FaPeopleGroup,
  MdMessage,
} from "../../../assets/icons/index.js";

function Sidebar() {
  const sidebarOptions = [
    { label: "Inbox", icon: <FaRegFolder />, count: 4 },
    { label: "Project", icon: <GoProjectRoadmap /> },
    { label: "Activity", icon: <LuSquareActivity /> },
    { label: "Tasks", icon: <FaTasks /> },
    { label: "Teams", icon: <FaPeopleGroup /> },
    { label: "Messages", icon: <MdMessage /> },
  ];
  return (
    <>
      <ul className="flex flex-col gap-3 mt-8 text-secondary-text border-r border-border w-40 p-4">
        {sidebarOptions.map((option) => (
          <li
            className={`flex gap-3 items-center justify-between ${option.count && "bg-surface"}`}
          >
            <div className="flex items-center gap-3">
              <span>{option.icon}</span>
              <span>{option.label}</span>
            </div>
            {option.count && (
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {option.count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
