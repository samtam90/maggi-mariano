import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rufina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rufina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});
