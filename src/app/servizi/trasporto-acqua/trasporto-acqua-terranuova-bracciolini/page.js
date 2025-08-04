import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Terranuova Bracciolini",
  canonical: links.servizi["trasporto-acqua"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});