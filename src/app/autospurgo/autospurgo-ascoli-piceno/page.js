import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Ascoli Piceno" });
export default withBaseProps({ 
    title: "Autospurgo Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});
