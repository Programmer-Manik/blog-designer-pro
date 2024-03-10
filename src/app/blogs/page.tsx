import { Blog } from "@/Types";
import BlogCard from "@/components/ui/BlogCard";

const BlogsPage = async() => {
  const res = await fetch("http://localhost:5000/blogs",{
    cache:'no-store',
  });
  const allBlogs = await res.json();
  // console.log(allBlogs)
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-4xl py-5">
        All blogs from <span className=" text-accent">Blogiz</span>
      </h2>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
          allBlogs.map((blogs:Blog) => (<BlogCard key={blogs.id} blog={blogs} />
          ))
        }
      </div>
    </div>
  );
};

export default BlogsPage;
