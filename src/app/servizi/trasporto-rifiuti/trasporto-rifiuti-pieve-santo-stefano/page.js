import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pieve Santo Stefano",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});