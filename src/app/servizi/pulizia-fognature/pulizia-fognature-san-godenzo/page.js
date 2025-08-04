import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature San Godenzo",
  canonical: links.servizi["pulizia-fognature"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});
