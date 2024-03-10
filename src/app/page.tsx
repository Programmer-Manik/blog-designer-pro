import LatesBlogs from "@/components/LatesBlogs/LatesBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs",{
    next:{
      revalidate:30,
    }
  });
  const blogs = await res.json();
  // console.log(blogs)
  return (
    <>
     <LatesBlogs blogs={blogs}/>
    </>
  );
};

export default HomePage;
