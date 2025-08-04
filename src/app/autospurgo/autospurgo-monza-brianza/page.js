import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Monza Brianza" });
export default withBaseProps({ 
    title: "Autospurgo Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
