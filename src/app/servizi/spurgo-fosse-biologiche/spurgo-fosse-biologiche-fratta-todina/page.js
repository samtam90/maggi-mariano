import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fratta Todina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["fratta-todina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"}  
});
