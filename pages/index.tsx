import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-2xl lg:text-8xl sm:text-5xl text-center font-bold">
          아이들의 안전한 학교생활을 위하여
        </h1>
      </section>
    </>
  );
};

export default Home;
