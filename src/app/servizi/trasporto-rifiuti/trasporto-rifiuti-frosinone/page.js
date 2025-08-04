import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Frosinone",
  canonical: links.servizi["trasporto-rifiuti"]["frosinone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});