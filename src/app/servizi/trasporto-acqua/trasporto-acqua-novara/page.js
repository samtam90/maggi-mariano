import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Novara",
  canonical: links.servizi["trasporto-acqua"]["novara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});