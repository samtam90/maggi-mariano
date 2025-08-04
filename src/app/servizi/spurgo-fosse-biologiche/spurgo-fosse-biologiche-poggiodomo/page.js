import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Poggiodomo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});
