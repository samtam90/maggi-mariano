import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cerreto di Spoleto",
  canonical: links.servizi["trasporto-rifiuti"]["cerreto-di-spoleto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});