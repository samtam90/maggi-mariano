import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Milano" });
export default withBaseProps({ 
    title: "Autospurgo Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});
