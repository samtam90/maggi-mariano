import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Terranuova Bracciolini",
  canonical: links.servizi["pulizia-fognature"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});
