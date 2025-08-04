import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cuneo" });
export default withBaseProps({ 
    title: "Autospurgo Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});
