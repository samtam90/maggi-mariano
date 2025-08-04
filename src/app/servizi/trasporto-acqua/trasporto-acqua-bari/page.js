import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Bari",
  canonical: links.servizi["trasporto-acqua"]["bari"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});