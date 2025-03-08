import React from "react";
import { social } from "@/data";

const SocialMedia = () => {
  return (
    <ul className=" flex gap-4 text-cyan-400  justify-around mr-20">
      {social.map((socialIcon) => {
        const { id, url, icon } = socialIcon;
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              <div className="w-8 h-8 text-3xl ">{icon}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
