import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ancona",
  canonical: links.servizi["trasporto-rifiuti"]["ancona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});