"use client";

import { useState } from "react";
import { TDATA } from "@/types/data";
import { FcOpenedFolder, FcFolder, FcFile } from "react-icons/fc";

const FolderItem = ({ item }: { item: TDATA }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleClick = () => {
    if (item.isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className="flex items-center hover:cursor-pointer"
        onClick={handleClick}
      >
        <p>
          {item.isFolder ? (
            isOpen ? (
              <FcOpenedFolder size={20} />
            ) : (
              <FcFolder size={20} />
            )
          ) : (
            <FcFile size={20} />
          )}
        </p>
        <p className="ml-1">{item.title}</p>
      </div>
      {item.isFolder && isOpen && item.children && (
        <ul className="ml-4">
          {item.children.map((e, idx) => (
            <li key={idx}>
              <FolderItem item={e} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FolderItem;
