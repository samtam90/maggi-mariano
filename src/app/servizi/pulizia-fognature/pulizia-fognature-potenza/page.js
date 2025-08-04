import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Potenza",
  canonical: links.servizi["pulizia-fognature"]["potenza"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});
