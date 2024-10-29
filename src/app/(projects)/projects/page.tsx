import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProjectPageProjects from "@/components/ProjectPageProjects/ProjectPageProjects";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="flex items-center justify-center px-4 py-16 md:px-12 lg:px-32">
        {/* <section className="relative h-[100vh] ">
          <h1 className="fixed left-[50%] top-[50%] translate-x-[-50%] text-center text-[7vh]">
            Scroll down to see our Projects
          </h1>
        </section> */}

        <ProjectPageProjects />
      </main>
      <Footer />
    </>
  );
}
