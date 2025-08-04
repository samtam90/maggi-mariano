import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cerreto di Spoleto",
  canonical: links.servizi["pulizia-fognature"]["cerreto-di-spoleto"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});
