import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pieve Santo Stefano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pieve-santo-stefano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});
