import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Foligno",
  canonical: links.servizi["pulizia-fognature"]["foligno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});
