import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vinci",
  canonical: links.servizi["pulizia-fognature"]["vinci"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});
