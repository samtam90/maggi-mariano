import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Rufina" });
export default withBaseProps({ 
    title: "Autospurgo Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});
