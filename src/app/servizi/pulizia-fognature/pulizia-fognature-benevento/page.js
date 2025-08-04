import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Benevento",
  canonical: links.servizi["pulizia-fognature"]["benevento"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});
