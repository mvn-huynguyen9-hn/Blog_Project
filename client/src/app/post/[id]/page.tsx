import React from "react";
import prisma from "../../../../lib/prisma";

export default async function PostDetail({
  params
}: {
  params: { id: string };
}) {
  const {id} = params
  const detailPost = await getData(id);
  console.log({detailPost})
  return <div>{detailPost?.id}</div>;
}

const getData = async (id: string) => {
  const posts = await prisma.post.findUnique({
    where: {
      id: id
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return posts;
};
