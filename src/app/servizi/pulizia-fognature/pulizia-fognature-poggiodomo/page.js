import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Poggiodomo",
  canonical: links.servizi["pulizia-fognature"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});
