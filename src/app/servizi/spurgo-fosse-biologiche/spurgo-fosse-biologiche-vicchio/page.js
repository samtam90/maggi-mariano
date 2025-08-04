import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vicchio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vicchio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});
