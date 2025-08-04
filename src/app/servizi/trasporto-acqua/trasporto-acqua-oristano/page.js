import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Oristano",
  canonical: links.servizi["trasporto-acqua"]["oristano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});