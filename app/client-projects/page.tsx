import ContentLayout from "@/components/ContentLayout";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { data } from "@/lib/data";

import ClientProjectCard from "./ClientProjectCard";

export default function WorkPage() {
  const cards = data.work.clientProjects.map((project: any, index: number) => (
    <ClientProjectCard key={project.id} project={project} index={index} />
  ));

  return (
    <ContentLayout
      title={data.work.page.title}
      subline1={data.work.page.subline1}
      subline2={data.work.page.subline2}
      contentInContaienr={false}
    >
      <Carousel items={cards} />
    </ContentLayout>
  );
}
