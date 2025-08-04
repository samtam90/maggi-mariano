import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Citerna",
  canonical: links.servizi["pulizia-fognature"]["citerna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});
