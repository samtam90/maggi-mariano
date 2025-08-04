import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Terranuova Bracciolini",
  canonical: links.servizi["spurgo-fosse-biologiche"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});
