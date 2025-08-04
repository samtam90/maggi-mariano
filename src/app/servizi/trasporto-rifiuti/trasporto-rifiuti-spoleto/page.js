import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Spoleto",
  canonical: links.servizi["trasporto-rifiuti"]["spoleto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});