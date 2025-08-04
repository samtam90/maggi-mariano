import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sansepolcro",
  canonical: links.servizi["trasporto-acqua"]["sansepolcro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});