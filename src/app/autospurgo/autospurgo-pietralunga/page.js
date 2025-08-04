import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pietralunga" });
export default withBaseProps({ 
    title: "Autospurgo Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});
