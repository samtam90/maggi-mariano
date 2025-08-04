import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti San Giustino",
  canonical: links.servizi["trasporto-rifiuti"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});