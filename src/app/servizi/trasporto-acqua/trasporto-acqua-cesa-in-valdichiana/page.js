import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cesa in valdichiana",
  canonical: links.servizi["trasporto-acqua"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});