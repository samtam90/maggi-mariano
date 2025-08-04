import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montone",
  canonical: links.servizi["pulizia-fognature"]["montone"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});
