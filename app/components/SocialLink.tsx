import React from "react";

import { IconType } from "react-icons";

type SocialLinkProps = {
  name: string;
  href: string;
  Icon: IconType;
};

const SocialLink = ({ name, href, Icon }: SocialLinkProps) => {
  return (
    <div>
      <a href={href} target="_blank" aria-label={name}>
        <Icon className="size-10 text-white transition-all duration-300 ease-in-out md:size-11 hover:md:size-13"></Icon>
      </a>
    </div>
  );
};

export default SocialLink;
