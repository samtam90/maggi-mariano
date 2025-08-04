import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Giano dell'Umbria",
  canonical: links.servizi["spurgo-fosse-biologiche"]["giano-dell-umbria"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});
