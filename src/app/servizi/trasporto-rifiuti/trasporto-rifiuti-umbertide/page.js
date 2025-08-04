import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Umbertide",
  canonical: links.servizi["trasporto-rifiuti"]["umbertide"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});