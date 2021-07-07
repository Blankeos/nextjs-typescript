import Link from "next/link";
import React from "react";

interface Props {
  link?: string;
  image?: string;
  title: string;
  shortDesc?: string;
}

const ArticleLink: React.FC<Props> = ({ link, image, title, shortDesc }) => {
  return (
    <Link href={link ? link : "/"}>
      <a>
        <div className="border p-4">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm">{shortDesc}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleLink;
