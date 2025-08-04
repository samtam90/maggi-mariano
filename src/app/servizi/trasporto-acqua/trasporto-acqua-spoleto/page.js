import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Spoleto",
  canonical: links.servizi["trasporto-acqua"]["spoleto"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});