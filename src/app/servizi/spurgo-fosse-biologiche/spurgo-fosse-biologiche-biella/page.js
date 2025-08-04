import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Biella",
  canonical: links.servizi["spurgo-fosse-biologiche"]["biella"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
