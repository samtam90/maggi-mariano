import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Napoli",
  canonical: links.servizi["pulizia-fognature"]["napoli"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});
