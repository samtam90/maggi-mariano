import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Barletta-Andria-Trani",
    canonical: links.autospurgo["barletta-andria-trani"],
});
export default withBaseProps({ 
    title: "Autospurgo Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"}  
});
