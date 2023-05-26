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
import { NavLinkEnum } from "@/components/nav";
import SeoComponent, { Seo } from "@/components/shared/seo-component";
import { useNavSettingsContext } from "@/context/nav-settings-context";
import { NextPage } from "next/types";
import { useEffect } from "react";

interface Props {
  seo: Seo;
}

const Home: NextPage<Props> = () => {
  // export default function Home() {
  const { setActiveNavLink } = useNavSettingsContext();
  useEffect(() => {
    setActiveNavLink(NavLinkEnum.Home);
  }, [setActiveNavLink]);
  return (
    <>
      <SeoComponent
        seo={{
          title: "Accueil - Securiclefs ",
          description: "Description SEO de la page",
        }}
      />
      <HeroComponent />
      <main>
        <ServicesComponent />
        <EtapesComponent />
        <TarifsComponent />
        {/* <RealisationsComponent /> */}
        <FaqComponent />
        <AssurancesComponent />
        <UrgenceComponent />
        <ContactComponent />
      </main>
    </>
  );
};

export default Home;
