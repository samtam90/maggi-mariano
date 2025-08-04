import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Corciano",
  canonical: links.servizi["trasporto-rifiuti"]["corciano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});