import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Biella",
  canonical: links.servizi["pulizia-fognature"]["biella"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
