import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pavia",
  canonical: links.servizi["trasporto-rifiuti"]["pavia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});