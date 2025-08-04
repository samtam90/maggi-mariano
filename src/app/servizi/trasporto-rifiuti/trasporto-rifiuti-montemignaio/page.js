import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montemignaio",
  canonical: links.servizi["trasporto-rifiuti"]["montemignaio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});