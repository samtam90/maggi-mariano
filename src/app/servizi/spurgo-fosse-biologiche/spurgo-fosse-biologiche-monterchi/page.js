import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monterchi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monterchi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});
