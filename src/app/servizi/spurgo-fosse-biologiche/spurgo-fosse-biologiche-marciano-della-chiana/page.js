import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Marciano della Chiana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["marciano-della-chiana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});
