import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bastia Umbra",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bastia-umbra"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"}  
});
