import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lisciano Niccone",
  canonical: links.servizi["pulizia-fognature"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"}  
});
