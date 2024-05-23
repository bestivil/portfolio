import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import DisplayProjects from "./_components/display-projects";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC", int: Math.random() });
  // const createPost = await api.post.create({ name: 'test'});

  return (
    < DisplayProjects />
    
  );
}


