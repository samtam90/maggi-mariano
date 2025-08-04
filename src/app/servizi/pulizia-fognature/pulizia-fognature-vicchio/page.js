import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vicchio",
  canonical: links.servizi["pulizia-fognature"]["vicchio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});
