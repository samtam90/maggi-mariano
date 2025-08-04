import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Poppi",
  canonical: links.servizi["trasporto-rifiuti"]["poppi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});