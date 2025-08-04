import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Verona" });
export default withBaseProps({ 
    title: "Autospurgo Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});
