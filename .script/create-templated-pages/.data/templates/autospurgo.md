import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo [name]" });
export default withBaseProps({ 
    title: "Autospurgo [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
