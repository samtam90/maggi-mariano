import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Biella",
  canonical: links.servizi["trasporto-acqua"]["biella"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});