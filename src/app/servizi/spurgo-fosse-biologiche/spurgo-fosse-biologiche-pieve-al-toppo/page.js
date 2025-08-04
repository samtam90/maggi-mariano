import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pieve al Toppo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pieve-al-toppo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"}  
});
