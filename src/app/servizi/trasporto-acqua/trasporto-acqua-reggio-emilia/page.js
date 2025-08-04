import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Reggio Emilia",
  canonical: links.servizi["trasporto-acqua"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});