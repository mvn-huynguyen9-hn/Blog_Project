import prisma from "../../lib/prisma";

export default async function Home() {
  const posts = await getData() 
  console.log({posts})
  return (
   <div>Hello world</div>
  );
}

const getData = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return posts
};