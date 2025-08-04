import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel Ritaldi",
  canonical: links.servizi["pulizia-fognature"]["castel-ritaldi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});
