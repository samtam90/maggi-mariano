import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sigillo",
  canonical: links.servizi["trasporto-acqua"]["sigillo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});