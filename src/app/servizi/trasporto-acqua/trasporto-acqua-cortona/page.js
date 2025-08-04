import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cortona",
  canonical: links.servizi["trasporto-acqua"]["cortona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});