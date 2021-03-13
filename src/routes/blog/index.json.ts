import posts from "./_posts";

import type { SapperRequest, SapperResponse } from "@sapper/server";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  })
);

export const get = (req: SapperRequest, res: SapperResponse): void => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
};
