import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Novara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["novara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});
