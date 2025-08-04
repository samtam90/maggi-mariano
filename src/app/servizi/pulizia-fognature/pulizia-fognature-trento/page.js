import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Trento",
  canonical: links.servizi["pulizia-fognature"]["trento"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});
