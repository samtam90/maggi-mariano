import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pieve Santo Stefano",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});