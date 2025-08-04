import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rufina",
  canonical: links.servizi["pulizia-fognature"]["rufina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});
