import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ravenna",
  canonical: links.servizi["trasporto-acqua"]["ravenna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});