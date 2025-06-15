import LibraryHeader from "@/components/LibraryHeader";
import LibraryHero from "@/components/LibraryHero";
import LibraryServices from "@/components/LibraryServices";
import LibraryResources from "@/components/LibraryResources";
import LibraryFooter from "@/components/LibraryFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LibraryHeader />
      <main>
        <LibraryHero />
        <LibraryServices />
        <LibraryResources />
      </main>
      <LibraryFooter />
    </div>
  );
};

export default Index;
