import {
  CiSearch,
  IoCloudDownloadOutline,
  IoIosNotificationsOutline,
} from "../../../assets/icons/index.js";
import profile from "../../../assets/images/Bharath_photo.jpeg";

function TopBar() {
  return (
    <>
      <div className="flex items-center justify-between h-8 w-full p-10 border-b border-border">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="border border-border p-2 rounded-xl"
          />
          <CiSearch className="absolute right-0 top-2" />
        </div>

        <div className="flex items-center gap-8">
          <IoCloudDownloadOutline className="h-6 w-6" />
          <IoIosNotificationsOutline className="h-6 w-6" />
          <div className="flex gap-3 items-center">
            <img
              src={profile}
              alt="profile_pic"
              className="h-8 w-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-medium">Bharath</span>
              <span className="text-secondary-text">Sales Manager</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
