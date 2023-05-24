import { FC, useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { instagram, tiktok, facebook, whatsapp } from "@/assets/icons";


const FooterComponent: FC = () => {

    const [ zones, setZones ] = useState("");
    
    useEffect(() => {
        fetch(`/api/zones`)
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            
            setZones(json.data)
        })
    }, [])
    
    return (
        <>
        <footer>
            <div className="container">
                <div>
                    <div>
                        <h3>Menu</h3>
                        <Link href="#etapes">Comment ça marche ?</Link>
                        <Link href="#tarifs">Nos tarifs</Link>
                        <Link href="#equipe">Notre équipe</Link>
                        <Link href="#zones">Nos zones</Link>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <Link href="tel:0769474632">07 69 47 46 32</Link>
                        <Link href="#tarifs">Mentions Légales</Link>
                        <Link href="#equipe">Conditions générales</Link>
                        <Link href="#zones">Politique de confidentialité</Link>
                    </div>
                    <div className="reseaux">
                        <h3>Réseaux</h3>
                        <div>
                            <Link href="https://www.instagram.com/securiclefs/" target="_blank">
                                <Image src={ instagram } alt="" width={70} height={70} />
                            </Link>
                            <Link href="https://www.tiktok.com/@securiclefs?_t=8cWqrwXS8BX&_r=1" target="_blank">
                                <Image src={ tiktok } alt="" width={70} height={70}  />
                            </Link>
                            {/* <Link href="" target="_blank">
                                <Image src={facebook} alt="" width={70} height={70}  />
                                <span>@reseau</span>
                            </Link> */}
                            <Link href="" target="_blank">
                                <Image src={whatsapp} alt="" width={70} height={70}  />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Mes zones</h3>
                        
                    </div>
                </div>
                
            </div>
        </footer>
        <section id="end">
            <p>Copyright ©2023 Securiclefs</p>
        </section>
        </>
    );
};

export default FooterComponent;
