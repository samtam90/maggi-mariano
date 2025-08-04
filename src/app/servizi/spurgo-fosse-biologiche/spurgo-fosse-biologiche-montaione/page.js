import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montaione",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montaione"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});
