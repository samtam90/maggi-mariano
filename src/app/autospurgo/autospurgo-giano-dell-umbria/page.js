import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Giano dell'Umbria" });
export default withBaseProps({ 
    title: "Autospurgo Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});
