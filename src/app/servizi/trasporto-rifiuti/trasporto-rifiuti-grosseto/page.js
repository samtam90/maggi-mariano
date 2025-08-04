import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Grosseto",
  canonical: links.servizi["trasporto-rifiuti"]["grosseto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});