import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Castiglion Fiorentino",
    canonical: links.autospurgo["castiglion-fiorentino"],
});
export default withBaseProps({ 
    title: "Autospurgo Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
