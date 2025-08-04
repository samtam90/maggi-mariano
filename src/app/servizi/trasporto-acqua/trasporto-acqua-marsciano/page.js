import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Marsciano",
  canonical: links.servizi["trasporto-acqua"]["marsciano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});