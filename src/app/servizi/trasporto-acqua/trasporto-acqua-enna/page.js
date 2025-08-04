import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Enna",
  canonical: links.servizi["trasporto-acqua"]["enna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});