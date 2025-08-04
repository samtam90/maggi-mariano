import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cagliari",
  canonical: links.servizi["trasporto-acqua"]["cagliari"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});