import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Belluno" });
export default withBaseProps({ 
    title: "Autospurgo Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});
