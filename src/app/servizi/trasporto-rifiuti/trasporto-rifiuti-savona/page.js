import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Savona",
  canonical: links.servizi["trasporto-rifiuti"]["savona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});