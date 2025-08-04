import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Monte San Savino",
    canonical: links.autospurgo["monte-san-savino"],
});
export default withBaseProps({ 
    title: "Autospurgo Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});
