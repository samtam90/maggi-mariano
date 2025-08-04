import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Belluno",
  canonical: links.servizi["trasporto-rifiuti"]["belluno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});