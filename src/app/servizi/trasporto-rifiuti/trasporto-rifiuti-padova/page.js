import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Padova",
  canonical: links.servizi["trasporto-rifiuti"]["padova"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});