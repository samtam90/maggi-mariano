import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Campello sul Clitunno",
    canonical: links.autospurgo["campello-sul-clitunno"],
});
export default withBaseProps({ 
    title: "Autospurgo Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});
