import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Certaldo" });
export default withBaseProps({ 
    title: "Pulizia fognature Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
