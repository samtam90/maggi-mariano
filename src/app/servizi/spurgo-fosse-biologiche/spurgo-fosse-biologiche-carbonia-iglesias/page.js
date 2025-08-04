import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Carbonia Iglesias",
  canonical: links.servizi["spurgo-fosse-biologiche"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});
