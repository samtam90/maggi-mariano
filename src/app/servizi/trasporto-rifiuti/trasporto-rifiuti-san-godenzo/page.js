import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti San Godenzo",
  canonical: links.servizi["trasporto-rifiuti"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});