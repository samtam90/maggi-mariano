import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Pieve al Toppo" });
export default withBaseProps({ 
    title: "Pulizia fognature Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"}  
});
