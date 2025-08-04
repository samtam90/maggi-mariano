import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Alessandria",
  canonical: links.servizi["pulizia-fognature"]["alessandria"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});
