import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pratovecchio Stia",
    canonical: links.autospurgo["pratovecchio-stia"],
});
export default withBaseProps({ 
    title: "Autospurgo Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});
