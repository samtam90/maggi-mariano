import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Londa",
  canonical: links.servizi["pulizia-fognature"]["londa"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
