import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bucine",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bucine"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});
