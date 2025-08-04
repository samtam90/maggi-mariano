import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Dicomano" });
export default withBaseProps({ 
    title: "Autospurgo Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});
