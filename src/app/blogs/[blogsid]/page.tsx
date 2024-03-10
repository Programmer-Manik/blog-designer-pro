import { Blog } from "@/Types";
import BlogDetails from "@/components/ui/BlogDetails";

interface blogId {
  params: {
    blogsid: string;
  };
}

export const generateStaticParams = async() => {
   const res = await fetch('http://localhost:5000/blogs')
   const blogs = await res.json()
   return blogs.slice(0, 3).map((blog:Blog)=>({
      blogsid: blog.id,
   }))
}

const BlogsDetailsPage = async ({ params }: blogId) => {
  // console.log(params)
  const res = await fetch(`http://localhost:5000/blogs/${params.blogsid}`,{
   cache:'no-store'
  });
  const blog = await res.json();
  // console.log(blog)

  return (
    <div className="my-7">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogsDetailsPage;
