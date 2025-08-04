import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Asti",
  canonical: links.servizi["trasporto-rifiuti"]["asti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});