import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Subbiano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["subbiano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});
