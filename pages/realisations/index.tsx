import { NavLinkEnum } from "@/components/nav";
import { useNavSettingsContext } from "@/context/nav-settings-context";
import { useEffect } from "react";

export default function Realisations() {
  const { setActiveNavLink } = useNavSettingsContext();
  useEffect(() => {
    setActiveNavLink(NavLinkEnum.Home);
  }, [setActiveNavLink]);
  return (
    <>
      <header className="mt-24">Introduction page / hero</header>
      <main>Realisations, design a definir</main>
    </>
  );
}
