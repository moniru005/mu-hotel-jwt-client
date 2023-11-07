import Navbar from "../Components/Header/Navbar/Navbar";

const AboutPage = () => {
  return (
    <div>
      <div className="shadow-lg bg-slate-500">
        <Navbar></Navbar>
      </div>
      <div className="flex h-screen justify-center mt-20">
        <h2 className="text-xl font-medium">About Page</h2>
      </div>
    </div>
  );
};

export default AboutPage;
