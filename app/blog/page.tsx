import Link from "next/link";

interface Post {
  title: string;
  slug: string;
  content: string;
}
const page = async () => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return (
    <div>
      <h1>Blogs</h1>
      {posts.map((post, key) => (
        <div key={key}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default page;
