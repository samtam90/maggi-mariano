import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Umbertide",
  canonical: links.servizi["trasporto-acqua"]["umbertide"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});