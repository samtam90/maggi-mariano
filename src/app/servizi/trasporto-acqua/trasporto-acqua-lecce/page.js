import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Lecce",
  canonical: links.servizi["trasporto-acqua"]["lecce"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});