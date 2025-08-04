import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bibbiena",
  canonical: links.servizi["pulizia-fognature"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});
