import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche San Giustino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});
