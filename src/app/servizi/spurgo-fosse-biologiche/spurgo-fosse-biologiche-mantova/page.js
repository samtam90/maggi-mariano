import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Mantova",
  canonical: links.servizi["spurgo-fosse-biologiche"]["mantova"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
