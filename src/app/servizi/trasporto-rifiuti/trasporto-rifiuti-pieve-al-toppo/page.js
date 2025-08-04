import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pieve al Toppo",
  canonical: links.servizi["trasporto-rifiuti"]["pieve-al-toppo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"}  
});