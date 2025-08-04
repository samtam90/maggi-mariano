import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Caltanissetta",
  canonical: links.servizi["trasporto-rifiuti"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});