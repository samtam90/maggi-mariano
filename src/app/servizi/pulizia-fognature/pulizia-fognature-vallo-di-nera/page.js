import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vallo di Nera",
  canonical: links.servizi["pulizia-fognature"]["vallo-di-nera"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});
