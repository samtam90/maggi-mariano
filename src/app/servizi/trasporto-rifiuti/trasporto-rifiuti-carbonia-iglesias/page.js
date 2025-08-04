import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Carbonia Iglesias",
  canonical: links.servizi["trasporto-rifiuti"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});