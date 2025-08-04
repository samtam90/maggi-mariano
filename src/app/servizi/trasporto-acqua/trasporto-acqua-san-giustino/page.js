import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua San Giustino",
  canonical: links.servizi["trasporto-acqua"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});