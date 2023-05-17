import {
  HeroComponent,
  ServicesComponent,
  EtapesComponent,
  TarifsComponent,
  RealisationsComponent,
  FaqComponent,
  AssurancesComponent,
  UrgenceComponent,
  ContactComponent,
} from "@/components/";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <main>
        <ServicesComponent />
        <EtapesComponent />
        <TarifsComponent />
        <RealisationsComponent />
        <FaqComponent />
        <AssurancesComponent />
        <UrgenceComponent />
        <ContactComponent />
      </main>
    </>
  );
}
