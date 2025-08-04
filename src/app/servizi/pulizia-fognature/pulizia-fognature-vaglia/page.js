import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vaglia",
  canonical: links.servizi["pulizia-fognature"]["vaglia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});
