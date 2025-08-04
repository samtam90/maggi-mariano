import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ragusa",
  canonical: links.servizi["pulizia-fognature"]["ragusa"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});
