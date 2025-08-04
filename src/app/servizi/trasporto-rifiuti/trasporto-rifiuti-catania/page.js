import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Catania",
  canonical: links.servizi["trasporto-rifiuti"]["catania"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});