import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sansepolcro",
  canonical: links.servizi["trasporto-rifiuti"]["sansepolcro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});