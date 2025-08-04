import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pieve Santo Stefano",
  canonical: links.servizi["pulizia-fognature"]["pieve-santo-stefano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});
