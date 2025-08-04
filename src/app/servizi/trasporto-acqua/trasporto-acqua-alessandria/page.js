import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Alessandria",
  canonical: links.servizi["trasporto-acqua"]["alessandria"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});