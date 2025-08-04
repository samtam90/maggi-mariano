import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pieve Santo Stefano",
  canonical: links.servizi["trasporto-acqua"]["pieve-santo-stefano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pieve Santo Stefano", 
    locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"}  
});