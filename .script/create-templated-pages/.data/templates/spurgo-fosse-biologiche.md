import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche [name]",
  canonical: links.servizi["spurgo-fosse-biologiche"]["[path]"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
