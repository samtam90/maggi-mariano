import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Isernia",
  canonical: links.servizi["trasporto-acqua"]["isernia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});