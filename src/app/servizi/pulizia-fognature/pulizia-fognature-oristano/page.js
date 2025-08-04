import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Oristano",
  canonical: links.servizi["pulizia-fognature"]["oristano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});
