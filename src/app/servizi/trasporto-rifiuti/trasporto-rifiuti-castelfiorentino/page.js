import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castelfiorentino",
  canonical: links.servizi["trasporto-rifiuti"]["castelfiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});