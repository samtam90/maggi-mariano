import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Genova",
  canonical: links.servizi["spurgo-fosse-biologiche"]["genova"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});
