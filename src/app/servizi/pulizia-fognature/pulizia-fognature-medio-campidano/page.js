import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Medio Campidano",
  canonical: links.servizi["pulizia-fognature"]["medio-campidano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
