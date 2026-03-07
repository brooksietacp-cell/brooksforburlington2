import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { OperationalRecord } from "@/components/operational-record";
import { BioBento } from "@/components/bio-bento";
import { DistinguishedService } from "@/components/distinguished-service";
import { WhereToVote } from "@/components/where-to-vote";
import { VolunteerSection } from "@/components/volunteer-section";
import { CampaignFooter } from "@/components/campaign-footer";
import { ShareSection } from "@/components/share-section";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <OperationalRecord />
      <BioBento />
      <DistinguishedService />
      <WhereToVote />
      <VolunteerSection />
      <ShareSection />
      <CampaignFooter />
    </main>
  );
}
