import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Certaldo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["certaldo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
