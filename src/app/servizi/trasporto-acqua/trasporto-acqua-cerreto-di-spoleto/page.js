import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cerreto di Spoleto",
  canonical: links.servizi["trasporto-acqua"]["cerreto-di-spoleto"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});