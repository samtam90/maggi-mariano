import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trevi",
  canonical: links.servizi["trasporto-rifiuti"]["trevi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});