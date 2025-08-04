import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Laterina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["laterina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
