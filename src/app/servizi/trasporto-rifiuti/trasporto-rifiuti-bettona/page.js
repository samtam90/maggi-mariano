import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bettona",
  canonical: links.servizi["trasporto-rifiuti"]["bettona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});