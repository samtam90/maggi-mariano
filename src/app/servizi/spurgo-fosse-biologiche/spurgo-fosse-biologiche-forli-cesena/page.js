import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Forlì-Cesena",
  canonical: links.servizi["spurgo-fosse-biologiche"]["forli-cesena"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});
