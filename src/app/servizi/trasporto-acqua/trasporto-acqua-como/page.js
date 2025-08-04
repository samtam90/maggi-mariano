import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Como",
  canonical: links.servizi["trasporto-acqua"]["como"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Como", 
    locationNames: {label: "Como", href: "como"}  
});