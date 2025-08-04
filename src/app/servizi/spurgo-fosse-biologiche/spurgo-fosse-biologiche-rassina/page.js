import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rassina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rassina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});
