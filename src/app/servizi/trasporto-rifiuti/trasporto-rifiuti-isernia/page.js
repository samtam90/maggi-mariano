import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Isernia",
  canonical: links.servizi["trasporto-rifiuti"]["isernia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});