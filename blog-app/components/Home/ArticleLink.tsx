import Link from "next/link";
import React from "react";

interface Props {
  link?: string;
  image?: string;
  title: string;
  shortDesc?: string;
  dateString: string;
}

const ArticleLink: React.FC<Props> = ({
  link,
  image,
  title,
  dateString,
  shortDesc,
}) => {
  return (
    <Link href={link ? link : "/"}>
      <a>
        <div className="border p-4 group">
          <div className="flex text-sm text-gray-500">
            Posted in{" "}
            {dateString ? new Date(dateString).toLocaleDateString() : "Unknown"}
          </div>
          <h3 className="font-medium text-xl my-2 group-hover:text-yellow-500 transition">
            {title}
          </h3>
          <p className="">{shortDesc}</p>
          <p className="mt-4 text-sm text-gray-500 group-hover:translate-x-2 transform transition">
            Read more &rarr;
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleLink;
