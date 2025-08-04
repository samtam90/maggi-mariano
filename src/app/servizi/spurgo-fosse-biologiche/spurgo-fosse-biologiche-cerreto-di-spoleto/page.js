import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cerreto di Spoleto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cerreto-di-spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});
