import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Montefalco" });
export default withBaseProps({ 
    title: "Autospurgo Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
