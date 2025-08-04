import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Borgo San Lorenzo",
  canonical: links.servizi["trasporto-acqua"]["borgo-san-lorenzo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});