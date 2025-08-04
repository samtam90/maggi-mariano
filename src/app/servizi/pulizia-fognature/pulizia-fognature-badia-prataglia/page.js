import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Badia Prataglia",
  canonical: links.servizi["pulizia-fognature"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});
