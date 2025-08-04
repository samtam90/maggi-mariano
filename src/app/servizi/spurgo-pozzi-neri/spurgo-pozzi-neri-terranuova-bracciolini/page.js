import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Terranuova Bracciolini",
  canonical: links.servizi["spurgo-pozzi-neri"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});