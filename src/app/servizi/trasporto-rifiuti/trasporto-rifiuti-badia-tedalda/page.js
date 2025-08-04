import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Badia Tedalda",
  canonical: links.servizi["trasporto-rifiuti"]["badia-tedalda"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});