import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pisa",
  canonical: links.servizi["trasporto-rifiuti"]["pisa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pisa", 
    locationNames: {label: "Pisa", href: "pisa"}  
});