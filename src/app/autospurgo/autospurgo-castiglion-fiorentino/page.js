import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Castiglion Fiorentino" });
export default withBaseProps({ 
    title: "Autospurgo Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
