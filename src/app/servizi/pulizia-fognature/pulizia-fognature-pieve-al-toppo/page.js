import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pieve al Toppo",
  canonical: links.servizi["pulizia-fognature"]["pieve-al-toppo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"}  
});
