import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Salerno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["salerno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});
