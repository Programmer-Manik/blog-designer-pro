import BlogDetails from "@/components/ui/BlogDetails";

interface blogId {
  params: {
    blogsid: string;
  };
}

const BlogsDetailsPage = async ({ params }: blogId) => {
  // console.log(params)
  const res = await fetch(`http://localhost:5000/blogs/${params.blogsid}`,{
   cache:'no-store'
  });
  const blog = await res.json();
  // console.log(blog)

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogsDetailsPage;
