import { DATA } from "@/mocks/db";
import FolderItem from "./folder-items";

const Sidebar = () => {
  return (
    <div className="flex-1">
      <ul
        className="h-full p-5
      "
      >
        {DATA.map((e, idx) => (
          <li key={idx}>
            <FolderItem item={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
