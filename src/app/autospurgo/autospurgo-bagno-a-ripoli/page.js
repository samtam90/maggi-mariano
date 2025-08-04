import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Bagno a Ripoli" });
export default withBaseProps({ 
    title: "Autospurgo Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});
