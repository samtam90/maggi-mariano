import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pieve al Toppo",
  canonical: links.servizi["trasporto-acqua"]["pieve-al-toppo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"}  
});