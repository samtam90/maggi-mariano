import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pieve Santo Stefano" });
export default withBaseProps({ 
    title: "Autospurgo Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});
