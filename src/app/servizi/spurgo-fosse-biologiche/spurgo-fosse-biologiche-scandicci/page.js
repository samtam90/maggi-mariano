import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Scandicci",
  canonical: links.servizi["spurgo-fosse-biologiche"]["scandicci"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});
