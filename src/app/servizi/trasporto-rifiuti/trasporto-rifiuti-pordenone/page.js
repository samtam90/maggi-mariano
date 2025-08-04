import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pordenone",
  canonical: links.servizi["trasporto-rifiuti"]["pordenone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});