interface Post {
  title: string;
  slug: string;
  content: string;
}
interface Props {
  params: {
    slug: string;
  };
}
const page = async ({ params: { slug } }: Props) => {
  const posts: Post[] = await fetch(
    "https://my-space-jeremy.vercel.app/api/content"
  ).then((res) => res.json());
  const post: Post | undefined = posts.find((post) => post.slug === slug);
  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <div>{post.content}</div>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
};

export default page;
