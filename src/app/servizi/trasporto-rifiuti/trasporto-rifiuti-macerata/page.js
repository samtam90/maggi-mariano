import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Macerata",
  canonical: links.servizi["trasporto-rifiuti"]["macerata"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});