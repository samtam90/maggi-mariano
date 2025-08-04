import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Fossato di Vico",
  canonical: links.servizi["trasporto-acqua"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});