import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Impruneta",
  canonical: links.servizi["trasporto-rifiuti"]["impruneta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});