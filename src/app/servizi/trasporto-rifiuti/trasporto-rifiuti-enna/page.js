import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Enna",
  canonical: links.servizi["trasporto-rifiuti"]["enna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});