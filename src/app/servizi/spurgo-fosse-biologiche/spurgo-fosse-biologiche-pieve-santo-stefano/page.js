import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pieve Santo Stefano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});
