import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Messina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["messina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});
