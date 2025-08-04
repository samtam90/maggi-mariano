import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature San Giustino",
  canonical: links.servizi["pulizia-fognature"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});
