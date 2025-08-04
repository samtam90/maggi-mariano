import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo L'Aquila",
    canonical: links.autospurgo["l-aquila"],
});
export default withBaseProps({ 
    title: "Autospurgo L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
