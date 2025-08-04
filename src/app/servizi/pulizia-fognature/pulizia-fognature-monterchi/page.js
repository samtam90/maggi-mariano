import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Monterchi",
  canonical: links.servizi["pulizia-fognature"]["monterchi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});
