import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Castel Focognano" });
export default withBaseProps({ 
    title: "Autospurgo Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});
