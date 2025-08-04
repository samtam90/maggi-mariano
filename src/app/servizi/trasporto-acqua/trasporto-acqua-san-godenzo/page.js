import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua San Godenzo",
  canonical: links.servizi["trasporto-acqua"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});