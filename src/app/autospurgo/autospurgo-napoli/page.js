import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Napoli" });
export default withBaseProps({ 
    title: "Autospurgo Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});
