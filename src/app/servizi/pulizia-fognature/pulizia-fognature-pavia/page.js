import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pavia",
  canonical: links.servizi["pulizia-fognature"]["pavia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});
