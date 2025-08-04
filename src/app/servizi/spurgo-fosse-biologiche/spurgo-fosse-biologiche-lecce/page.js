import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lecce",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lecce"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});
