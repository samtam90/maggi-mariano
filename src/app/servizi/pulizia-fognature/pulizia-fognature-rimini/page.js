import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rimini",
  canonical: links.servizi["pulizia-fognature"]["rimini"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});
