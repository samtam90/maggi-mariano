import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gubbio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gubbio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});
