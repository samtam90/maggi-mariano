import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Marsciano",
  canonical: links.servizi["pulizia-fognature"]["marsciano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});
