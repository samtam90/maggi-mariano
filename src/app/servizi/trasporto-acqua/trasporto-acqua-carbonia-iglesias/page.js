import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Carbonia Iglesias",
  canonical: links.servizi["trasporto-acqua"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});