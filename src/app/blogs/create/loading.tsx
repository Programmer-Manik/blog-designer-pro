import { Blog } from "@/Types";
import LoadingCard from "@/components/ui/LoadingCard";


const Loading = async() => {
   const res = await fetch('http://localhost:5000/blogs');
   const blogs =await res.json();
  return (
    <div>
      <div className=" grid grid-cols-3 gap-4">
        {
         blogs.map((blog:Blog)=> (
            <LoadingCard key={blog.id}/>
         ))
        }
      </div>
    </div>
  );
};

export default Loading;
