import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Macerata",
  canonical: links.servizi["spurgo-fosse-biologiche"]["macerata"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});
