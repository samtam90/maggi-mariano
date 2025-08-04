import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Preci",
  canonical: links.servizi["spurgo-fosse-biologiche"]["preci"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});
