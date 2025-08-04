import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fossato di Vico",
  canonical: links.servizi["trasporto-rifiuti"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});