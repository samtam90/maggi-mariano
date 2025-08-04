import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Roma",
  canonical: links.servizi["trasporto-rifiuti"]["roma"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});