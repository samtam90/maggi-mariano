import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castel Ritaldi",
  canonical: links.servizi["spurgo-pozzi-neri"]["castel-ritaldi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});