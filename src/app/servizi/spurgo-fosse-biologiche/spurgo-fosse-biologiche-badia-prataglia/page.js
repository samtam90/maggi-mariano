import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Badia Prataglia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});
