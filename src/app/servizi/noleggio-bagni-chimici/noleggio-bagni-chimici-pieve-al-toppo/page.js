import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pieve al Toppo",
  canonical: links.servizi["noleggio-bagni-chimici"]["pieve-al-toppo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pieve al Toppo", 
  locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"} 
});
