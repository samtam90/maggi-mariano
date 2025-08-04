import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Montemignaio" });
export default withBaseProps({ 
    title: "Autospurgo Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});
