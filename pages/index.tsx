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
import { useNavSettingsContext } from "@/context/nav-settings-context";
import { useEffect } from "react";

export default function Home() {
  const { setActiveNavLink } = useNavSettingsContext();
  useEffect(() => {
    setActiveNavLink(NavLinkEnum.Home);
  }, [setActiveNavLink]);
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
