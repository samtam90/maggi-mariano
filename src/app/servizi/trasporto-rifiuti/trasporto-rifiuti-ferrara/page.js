import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ferrara",
  canonical: links.servizi["trasporto-rifiuti"]["ferrara"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});