import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Asti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["asti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});
