import { Blog } from "@/Types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatesBlogs = ({blogs}:{blogs:Blog[]}) => {
  return (
    <div className="w-[90%] mx-auto ">
      <h2 className="text-center text-4xl py-5">Lates blogs from <span className=" text-accent">Blogiz</span></h2>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</p>
      <div  className="grid grid-cols-2 gap-4 my-5">
        {
          blogs.slice(0,2).map((blog) => 
          <LatestBlogCard key={blog.id} blog={blog}/>
          )
        }
      </div>
      <div  className="grid grid-cols-3 gap-4 my-5">
        {
          blogs.slice(2, 5).map((blog) => 
          <BlogCard key={blog.id} blog={blog}/>
          )
        }
      </div>
    </div>
  );
};

export default LatesBlogs;
