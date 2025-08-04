import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castel Ritaldi",
  canonical: links.servizi["trasporto-rifiuti"]["castel-ritaldi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});