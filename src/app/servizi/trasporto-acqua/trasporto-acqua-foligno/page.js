import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Foligno",
  canonical: links.servizi["trasporto-acqua"]["foligno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});