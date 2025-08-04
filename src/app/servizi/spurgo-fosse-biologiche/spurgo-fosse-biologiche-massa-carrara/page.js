import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Massa-Carrara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["massa-carrara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});
