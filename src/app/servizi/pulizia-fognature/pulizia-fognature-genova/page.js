import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Genova",
  canonical: links.servizi["pulizia-fognature"]["genova"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});
