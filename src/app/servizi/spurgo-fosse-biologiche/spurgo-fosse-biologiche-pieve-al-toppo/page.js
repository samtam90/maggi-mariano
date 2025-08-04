import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pieve al Toppo",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"}  
});
