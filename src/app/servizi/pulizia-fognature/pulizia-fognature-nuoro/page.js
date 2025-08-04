import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Nuoro",
  canonical: links.servizi["pulizia-fognature"]["nuoro"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});
