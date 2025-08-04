import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Milano",
  canonical: links.servizi["trasporto-rifiuti"]["milano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});