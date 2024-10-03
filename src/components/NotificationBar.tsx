import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFull } from "react-icons/io5";

export default function NotificationBar() {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="font-bold">9:41</h2>

      <span className="flex items-center space-x-2">
        <MdOutlineSignalCellularAlt className="size-5" />
        <FaWifi className="size-5" />
        <IoBatteryFull className="size-5" />
      </span>
    </div>
  );
}
