import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Modena",
  canonical: links.servizi["pulizia-fognature"]["modena"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});
