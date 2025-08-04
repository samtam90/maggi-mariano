import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pieve Santo Stefano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pieve-santo-stefano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});
