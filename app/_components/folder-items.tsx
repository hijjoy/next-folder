"use client";

import { useState } from "react";
import { TDATA } from "@/types/data";
import { FcOpenedFolder, FcFolder, FcFile } from "react-icons/fc";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

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
              <span className="flex items-center">
                <IoIosArrowDown color="#bdbdbd" />
                <FcOpenedFolder size={20} />
              </span>
            ) : (
              <span className="flex items-center">
                <IoIosArrowForward color="#8c8c8c" />
                <FcFolder size={20} />
              </span>
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
