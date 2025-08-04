import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Poggiodomo",
  canonical: links.servizi["trasporto-rifiuti"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});