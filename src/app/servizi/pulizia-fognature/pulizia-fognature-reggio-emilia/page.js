import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Reggio Emilia",
  canonical: links.servizi["pulizia-fognature"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});
