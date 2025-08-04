import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cerreto di Spoleto",
  canonical: links.servizi["spurgo-pozzi-neri"]["cerreto-di-spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});