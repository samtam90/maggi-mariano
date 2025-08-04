import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Marciano della Chiana",
  canonical: links.servizi["pulizia-fognature"]["marciano-della-chiana"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});
