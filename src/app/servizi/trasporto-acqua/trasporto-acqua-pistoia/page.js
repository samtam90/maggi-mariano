import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pistoia",
  canonical: links.servizi["trasporto-acqua"]["pistoia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});