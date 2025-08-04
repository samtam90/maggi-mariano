import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bastia Umbra",
  canonical: links.servizi["pulizia-fognature"]["bastia-umbra"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"}  
});
