import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Torino",
  canonical: links.servizi["trasporto-rifiuti"]["torino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});