import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Ritaldi",
  canonical: links.servizi["trasporto-acqua"]["castel-ritaldi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});