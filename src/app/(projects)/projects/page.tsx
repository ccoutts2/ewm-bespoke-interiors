import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProjectPageProjects from "@/components/ProjectPageProjects/ProjectPageProjects";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="flex items-center justify-center px-4 py-16 md:px-12 lg:px-32">
        <ProjectPageProjects />
      </main>
      <Footer />
    </>
  );
}
