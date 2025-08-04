import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Campello sul Clitunno" });
export default withBaseProps({ 
    title: "Autospurgo Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});
