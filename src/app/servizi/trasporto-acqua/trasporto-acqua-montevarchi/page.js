import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Montevarchi",
  canonical: links.servizi["trasporto-acqua"]["montevarchi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});