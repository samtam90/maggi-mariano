import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche San Godenzo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});
