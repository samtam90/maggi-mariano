import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Lastra a Signa" });
export default withBaseProps({ 
    title: "Autospurgo Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});
