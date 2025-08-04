import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sestino",
  canonical: links.servizi["trasporto-acqua"]["sestino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sestino", 
    locationNames: {label: "Sestino", href: "sestino"}  
});